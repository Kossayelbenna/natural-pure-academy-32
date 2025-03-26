
import React, { useState, useEffect } from 'react';
import { 
  Search, Brain, Activity, Heart, Moon, 
  Flame, ShieldCheck, Beaker, Sparkles, 
  MoveRight, Users, Award, ScrollText 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [animateHero, setAnimateHero] = useState(false);
  const [problemFocus, setProblemFocus] = useState('stress'); // Default problem focus
  const [counter, setCounter] = useState(968);
  
  const problems = {
    stress: {
      title: "Stress Chronique",
      description: "La science a identifié les nutriments exacts pour réduire vos hormones de stress",
      image: "https://images.unsplash.com/photo-1616531758364-731528408b3d?auto=format&fit=crop&q=80&w=1000&h=1000",
      color: "from-red-500 to-orange-500"
    },
    sommeil: {
      title: "Troubles du Sommeil",
      description: "Des composés naturels peuvent améliorer votre sommeil de 71% sans effets secondaires",
      image: "https://images.unsplash.com/photo-1514190051997-0f9f2d5b906f?auto=format&fit=crop&q=80&w=1000&h=1000",
      color: "from-blue-500 to-indigo-600"
    },
    énergie: {
      title: "Fatigue Persistante",
      description: "Découvrez les 3 minéraux essentiels que 78% des adultes sous-consomment",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000&h=1000",
      color: "from-amber-500 to-orange-600"
    },
    immunité: {
      title: "Défenses Immunitaires",
      description: "Notre étude sur 243 participants démontre l'efficacité des antioxydants spécifiques",
      image: "https://images.unsplash.com/photo-1584649096650-85cd8b8033c9?auto=format&fit=crop&q=80&w=1000&h=1000",
      color: "from-green-500 to-teal-600"
    }
  };

  useEffect(() => {
    setAnimateHero(true);
    
    // Simuler un compteur qui augmente pour l'effet psychologique
    const interval = setInterval(() => {
      setCounter(prev => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prev + increment;
      });
    }, 8000);
    
    // Rotation automatique des problèmes pour capter l'attention
    const problemRotation = setInterval(() => {
      setProblemFocus(prev => {
        const problemKeys = Object.keys(problems);
        const currentIndex = problemKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % problemKeys.length;
        return problemKeys[nextIndex];
      });
    }, 7000);
    
    return () => {
      clearInterval(interval);
      clearInterval(problemRotation);
    };
  }, []);

  const handleSearch = () => {
    if (onSearch && searchQuery) {
      onSearch(searchQuery);
      toast({
        title: "Recherche lancée",
        description: `Résultats pour "${searchQuery}"`,
      });
    } else {
      toast({
        title: "Essayez notre quiz !",
        description: "Découvrez votre profil nutritionnel personnalisé",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    if (onSearch) {
      onSearch(tag);
      toast({
        title: "Filtre appliqué",
        description: `Recherche de solutions pour "${tag}"`,
      });
    }
  };

  const currentProblem = problems[problemFocus as keyof typeof problems];

  return (
    <section className={`relative py-16 md:py-20 lg:py-24 overflow-hidden transition-all duration-700 ${animateHero ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${currentProblem.color} opacity-90 transition-colors duration-700`}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTIuNWEuNS41IDAgMDAtLjUtLjVoLTd2LTJoLTV2Mmgtd2EuNS41IDAgMDAtLjUuNVYyOGgydi02aDE0djZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Circles décoratifs animés */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full backdrop-blur-sm mb-6 animate-fadeIn">
              <Beaker className="h-5 w-5 text-white mr-2" />
              <span className="text-white text-sm font-medium">Laboratoire Indépendant</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn delay-100 leading-tight">
              <span className="block mb-2">{currentProblem.title} :</span>
              <Sparkles className="inline-block h-8 w-8 mr-2 mb-1" />
              <span className="bg-white/20 px-2 py-1 rounded backdrop-blur-sm">Solution Scientifique</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-fadeIn delay-200 max-w-2xl mx-auto lg:mx-0">
              {currentProblem.description}. Découvrez votre profil en seulement 2 minutes !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start animate-fadeIn delay-300">
              <Button 
                asChild
                size="jumbo"
                variant="cta" 
                className="group"
              >
                <Link to="/quiz">
                  🧪 Démarrer Mon Test Gratuit
                  <MoveRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="jumbo"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <Link to="/articles">
                  <ScrollText className="mr-2 h-5 w-5" />
                  Voir les Études
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fadeIn delay-400">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-amber-300" />
                <div>
                  <span className="font-bold text-2xl">{counter}</span>
                  <span className="text-sm ml-1">profils analysés</span>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-300" />
                <span className="text-sm">72% d'efficacité prouvée</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-amber-300" />
                <span className="text-sm">3 universités partenaires</span>
              </div>
            </div>
          </div>
          
          {/* Image côté droit sur desktop */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/5]">
                <img 
                  src={currentProblem.image} 
                  alt={currentProblem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <Badge className="self-start mb-3 bg-white/90 text-natural-800">Étude clinique</Badge>
                <h3 className="text-white text-xl font-medium mb-2">Solution naturelle validée</h3>
                <p className="text-white/80 text-sm">Notre étude démontre l'efficacité des solutions naturelles pour le {problemFocus}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre de recherche déplacée en bas */}
        <div className="max-w-xl mx-auto mt-12">
          <div className="relative animate-fadeIn delay-500">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/70" />
            </div>
            <Input
              type="text"
              placeholder="Rechercher votre problème de santé, symptôme..."
              className="bg-white/30 backdrop-blur-sm border-transparent pl-10 py-6 text-base shadow-lg focus:bg-white/40 text-white placeholder:text-white/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button 
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
              onClick={handleSearch}
            >
              Rechercher
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mt-4 animate-fadeIn delay-600">
            {[
              { name: 'Stress', icon: <Brain className="h-3 w-3 mr-1" /> },
              { name: 'Sommeil', icon: <Moon className="h-3 w-3 mr-1" /> },
              { name: 'Inflammation', icon: <Flame className="h-3 w-3 mr-1" /> },
              { name: 'Énergie', icon: <Activity className="h-3 w-3 mr-1" /> },
              { name: 'Immunité', icon: <ShieldCheck className="h-3 w-3 mr-1" /> },
              { name: 'Digestion', icon: <Activity className="h-3 w-3 mr-1" /> },
              { name: 'Concentration', icon: <Brain className="h-3 w-3 mr-1" /> },
              { name: 'Articulations', icon: <Activity className="h-3 w-3 mr-1" /> }
            ].map((tag) => (
              <Button 
                key={tag.name} 
                variant="outline"
                size="sm"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 text-xs"
                onClick={() => handleTagClick(tag.name)}
              >
                {tag.icon}
                {tag.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
