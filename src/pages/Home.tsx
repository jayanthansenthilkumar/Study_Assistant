import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquarePlus, History, LogOut, Loader2 } from "lucide-react";
import ChatHistory from "@/components/ChatHistory";
import { Session } from "@supabase/supabase-js";

const Home = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) {
        navigate("/auth");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const startNewChat = () => {
    navigate("/chat");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Floating emojis background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-6xl animate-bounce opacity-30" style={{ animationDelay: "0s", animationDuration: "3s" }}>
          😊
        </div>
        <div className="absolute top-40 right-32 text-6xl animate-bounce opacity-30" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}>
          💪
        </div>
        <div className="absolute bottom-32 left-40 text-6xl animate-bounce opacity-30" style={{ animationDelay: "1s", animationDuration: "4s" }}>
          📚
        </div>
        <div className="absolute top-1/2 right-1/4 text-6xl animate-bounce opacity-30" style={{ animationDelay: "1.5s", animationDuration: "3.2s" }}>
          ✨
        </div>
        <div className="absolute bottom-20 right-20 text-6xl animate-bounce opacity-30" style={{ animationDelay: "2s", animationDuration: "3.8s" }}>
          🎯
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Study AI Assistant
          </h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Card */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">
                Welcome back, learner! 🎓
              </CardTitle>
              <CardDescription className="text-lg">
                Ready to explore knowledge and get answers to your questions?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                onClick={startNewChat}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all transform hover:scale-105"
              >
                <MessageSquarePlus className="mr-2 h-5 w-5" />
                Let's Start the Chat
              </Button>
            </CardContent>
          </Card>

          {/* Chat History */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                History of Chats
              </CardTitle>
              <CardDescription>
                Review your previous conversations and continue where you left off
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChatHistory />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
