import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Teachers from "@/components/Teachers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-primary text-gray-900 dark:text-dark-primary transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <Teachers />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
