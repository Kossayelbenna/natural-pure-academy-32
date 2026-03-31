import React, { useEffect, useState, useMemo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import MetricTracker from "./components/MetricTracker";
import ConversionTracker from "./components/ConversionTracker";
import ArticleEngagementTracker from "./components/ArticleEngagementTracker";
import { LanguageProvider } from "./components/LanguageProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 2,
    },
  },
});

const App = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        "welcome": "Welcome to NATURAL&PURE",
        "nonprofit": "Nonprofit nutrition research organization",
      },
      fr: {
        "welcome": "Bienvenue à NATURAL&PURE",
        "nonprofit": "Organisation à but non lucratif de recherche en nutrition",
      }
    };
    return translations[language]?.[key] || key;
  };

  const languageValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language]);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background" lang={language}>
            <Toaster />
            <Outlet />
            <MetricTracker />
            <ConversionTracker />
            <ArticleEngagementTracker />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;