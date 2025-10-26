import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Trash2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface ChatSession {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

const ChatHistory = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from("chat_sessions")
        .select("*")
        .order("updated_at", { ascending: false });

      if (error) throw error;
      setSessions(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading chat history",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteSession = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const { error } = await supabase
        .from("chat_sessions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSessions(sessions.filter((s) => s.id !== id));
      toast({
        title: "Chat deleted",
        description: "The chat session has been removed",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting chat",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const openChat = (id: string) => {
    navigate(`/chat/${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>No chat history yet</p>
        <p className="text-sm">Start a new conversation to see it here!</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-2">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer"
            onClick={() => openChat(session.id)}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{session.title}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(session.updated_at), { addSuffix: true })}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => deleteSession(session.id, e)}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatHistory;
