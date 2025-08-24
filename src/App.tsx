import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalTransformation from "./pages/solutions/DigitalTransformation";
import CloudServices from "./pages/solutions/CloudServices";
import AIMachineLearning from "./pages/solutions/AIMachineLearning";
import Cybersecurity from "./pages/solutions/Cybersecurity";
import Leadership from "./pages/Leadership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          {/* Solutions Routes */}
          <Route path="/solutions/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/solutions/cloud" element={<CloudServices />} />
          <Route path="/solutions/ai-ml" element={<AIMachineLearning />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          {/* Placeholder routes for remaining navigation items */}
          <Route path="/industries/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary">Industries - Coming Soon</h1></div>} />
          <Route path="/services/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary">Services - Coming Soon</h1></div>} />
          <Route path="/careers/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary">Careers - Coming Soon</h1></div>} />
          <Route path="/insights/*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary">Insights - Coming Soon</h1></div>} />
          <Route path="/partners" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary">Partners - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
