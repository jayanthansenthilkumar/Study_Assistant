import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { Session } from "@supabase/supabase-js";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

const Chat = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(sessionId || null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (sessionId) {
      loadMessages(sessionId);
    }
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMessages = async (sessionId: string) => {
    try {
      const { data, error } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("session_id", sessionId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      setMessages((data || []) as Message[]);
    } catch (error: any) {
      toast({
        title: "Error loading messages",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const createNewSession = async (firstMessage: string) => {
    if (!session?.user) return null;

    try {
      const { data, error } = await supabase
        .from("chat_sessions")
        .insert({
          user_id: session.user.id,
          title: firstMessage.substring(0, 50) + (firstMessage.length > 50 ? "..." : ""),
        })
        .select()
        .single();

      if (error) throw error;
      return data.id;
    } catch (error: any) {
      toast({
        title: "Error creating session",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  const saveMessage = async (sessionId: string, role: "user" | "assistant", content: string) => {
    try {
      const { data, error } = await supabase
        .from("chat_messages")
        .insert({
          session_id: sessionId,
          role,
          content,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error: any) {
      toast({
        title: "Error saving message",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setLoading(true);

    try {
      // Create session if needed
      let activeSessionId = currentSessionId;
      if (!activeSessionId) {
        activeSessionId = await createNewSession(userMessage);
        if (!activeSessionId) {
          setLoading(false);
          return;
        }
        setCurrentSessionId(activeSessionId);
        navigate(`/chat/${activeSessionId}`, { replace: true });
      }

      // Save user message
      const userMsg = await saveMessage(activeSessionId, "user", userMessage);
      if (userMsg) {
        setMessages((prev) => [...prev, userMsg as Message]);
      }

      // Get AI response
      const { data, error } = await supabase.functions.invoke("chat", {
        body: {
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage },
          ],
        },
      });

      if (error) throw error;

      // Save AI response
      const aiMsg = await saveMessage(activeSessionId, "assistant", data.response);
      if (aiMsg) {
        setMessages((prev) => [...prev, aiMsg as Message]);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to get response",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Study Chat
          </h1>
        </div>
      </header>

      {/* Messages */}
      <ScrollArea className="flex-1 container mx-auto px-4 py-6" ref={scrollRef}>
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-2xl font-bold mb-2">Start a conversation</h2>
              <p className="text-muted-foreground">Ask me anything - from general knowledge to VLSI topics!</p>
            </div>
          )}
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 ${
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground max-w-[80%]"
                  : "mr-auto bg-card max-w-[80%]"
              }`}
            >
              <div className="whitespace-pre-wrap break-words">{message.content}</div>
            </Card>
          ))}
          {loading && (
            <Card className="p-4 mr-auto bg-card max-w-[80%]">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-muted-foreground">Thinking...</span>
              </div>
            </Card>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything... (e.g., 'Explain CMOS technology' or 'What time is it?')"
              disabled={loading}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
