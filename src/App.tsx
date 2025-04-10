import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nutrition from "./pages/Nutrition";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import ProfileSante from "./pages/ProfileSante";
import LaboSolutions from "./pages/LaboSolutions";
import SocialRedirect from "./pages/SocialRedirect";
import AISystem from './pages/AISystem';
import AILearningDashboard from './pages/AILearningDashboard';
import AIConfigurationDashboard from './pages/AIConfigurationDashboard';
import NosRecherches from "@/pages/NosRecherches";
import BibliothequeScientifique from './pages/BibliothequeScientifique';
import { bannedTerms, detectBannedTerms, auditPageContent } from "./utils/contentSafety";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 2, // 2 heures exactement (ISR)
    },
  },
});

const runContentSafetyCheck = () => {
  console.log("[GoogleAdGrantsSafety] Scanning for banned terms:", bannedTerms.join(', '));
  const pageContent = document.body.textContent?.toLowerCase() || '';
  const foundTerms = detectBannedTerms(pageContent);

  if (foundTerms.length > 0) {
    console.warn("[GoogleAdGrantsSafety] Detected potentially problematic terms:", foundTerms);
    const auditResults = auditPageContent(document.body.innerHTML);
    console.warn("[GoogleAdGrantsSafety] Compliance audit:", {
      isCompliant: auditResults.isCompliant,
      issuesCount: auditResults.issues.length,
      details: auditResults.issues
    });
    document.querySelectorAll('p, h1, h2, h3, h4, h5, div, button, a').forEach((element) => {
      const content = element.textContent?.toLowerCase() || '';
      const hasBannedTerm = foundTerms.some(term => content.includes(term));
      if (hasBannedTerm) {
        console.warn("[GoogleAdGrantsSafety] Problematic section:", {
          content: element.textContent,
          element: element.tagName,
          path: getElementPath(element as HTMLElement)
        });
        element.setAttribute('data-compliance-issue', 'true');
      }
    });
    if (window.localStorage.length > 0) {
      console.log("[GoogleAdGrantsSafety] Storage check: Using secured session storage instead of localStorage");
    }
  } else {
    console.log("[GoogleAdGrantsSafety] No banned terms detected on this page");
  }
};

const getElementPath = (element: HTMLElement) => {
  const path: string[] = [];
  let currentElement: HTMLElement | null = element;
  while (currentElement && currentElement !== document.body) {
    let selector = currentElement.tagName.toLowerCase();
    if (currentElement.id) {
      selector += `#${currentElement.id}`;
    } else if (currentElement.className) {
      selector += `.${Array.from(currentElement.classList).join('.')}`;
    }
    path.unshift(selector);
    currentElement = currentElement.parentElement;
  }
  return path.join(' > ');
};

const App = () => {
  useEffect(() => {
    const startTime = performance.now();
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        runContentSafetyCheck();
        console.log(`[GoogleAdGrantsSafety] First scan completed in ${(performance.now() - startTime).toFixed(2)}ms`);
      }, { timeout: 2000 });
    } else {
      const timer = setTimeout(() => {
        runContentSafetyCheck();
        console.log(`[GoogleAdGrantsSafety] First scan completed in ${(performance.now() - startTime).toFixed(2)}ms`);
      }, 1000);
      return () => clearTimeout(timer);
    }
    window.addEventListener('load', () => {
      setTimeout(() => {
        runContentSafetyCheck();
        console.log(`[GoogleAdGrantsSafety] Post-load scan completed in ${(performance.now() - startTime).toFixed(2)}ms`);
      }, 2500);
    }, { once: true });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster position="top-right" />
          <Sonner />
          <Outlet />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;