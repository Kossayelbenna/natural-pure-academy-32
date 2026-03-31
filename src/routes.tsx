import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Index from './pages/Index';
import About from './pages/About';
import Research from './pages/Research';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from "./pages/TermsOfUse";
import Accessibility from "./pages/Accessibility";
import Support from "./pages/Support";
import SiteMap from './pages/SiteMap';
import Articles from './pages/Articles';
import Article from './pages/Article';
import ProfileSante from './pages/ProfileSante';
import Impact from './pages/Impact';
import Volunteer from './pages/Volunteer';
import NosRecherches from './pages/NosRecherches';
import SocialRedirect from './pages/SocialRedirect';
import AISystem from './pages/AISystem';
import AILearningDashboard from './pages/AILearningDashboard';
import AIConfigurationDashboard from './pages/AIConfigurationDashboard';
import BibliothequeScientifique from './pages/BibliothequeScientifique';
import LaboSolutions from './pages/LaboSolutions';
import Nutrition from './pages/Nutrition';
import ScientificMethodology from './pages/ScientificMethodology';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      // === CORE PAGES (5 main pages) ===
      { index: true, element: <Index /> },
      { path: 'about', element: <About /> },
      { path: 'research', element: <Research /> },
      { path: 'quiz', element: <Quiz /> },
      { path: 'contact', element: <Contact /> },

      // === LEGAL PAGES ===
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-use', element: <TermsOfUse /> },
      { path: 'accessibility', element: <Accessibility /> },
      { path: 'site-map', element: <SiteMap /> },
      { path: 'support', element: <Support /> },

      // === CONTENT PAGES ===
      { path: 'articles', element: <Articles /> },
      { path: 'article/:articleId', element: <Article /> },
      { path: 'impact', element: <Impact /> },

      // === LEGACY / EXTRA PAGES ===
      { path: 'profile-sante', element: <ProfileSante /> },
      { path: 'nos-recherches', element: <NosRecherches /> },
      { path: 'labo-solutions', element: <LaboSolutions /> },
      { path: 'nutrition', element: <Nutrition /> },
      { path: 'scientific-methodology', element: <ScientificMethodology /> },
      { path: 'bibliotheque-scientifique', element: <BibliothequeScientifique /> },
      { path: 'volunteer', element: <Volunteer /> },

      // === SYSTEM PAGES ===
      { path: 'ai-system', element: <AISystem /> },
      { path: 'ai-dashboard', element: <AILearningDashboard /> },
      { path: 'ai-config', element: <AIConfigurationDashboard /> },
      { path: 'social', element: <SocialRedirect /> },
    ],
  },
]);

export default router;