import { useState } from "react";
import { Button } from "@/components/ui/button";
import NutritionalQuiz from "@/components/NutritionalQuiz";
import QuizResults from "@/components/QuizResults";
import { toast } from "sonner";
import { Beaker, ChevronRight, Award, Microscope, Users, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QuizResponse } from "@/components/quiz/types";
import LabEffects from "@/components/quiz/LabEffects";

const Quiz = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [quizResponses, setQuizResponses] = useState<QuizResponse>({
    name: '',
    email: '',
    objectives: [],
    dietaryHabits: '',
    meatConsumption: '',
    fishConsumption: '',
    fruitVegConsumption: '',
    exerciseFrequency: '',
    sleepQuality: '',
    stressLevel: '',
    symptoms: []
  });
  const [showMolecules, setShowMolecules] = useState(false);

  const startQuiz = () => {
    setStep('quiz');
    setShowMolecules(true);
    toast.success("Préparation de votre profil nutritionnel...");
  };

  const handleQuizComplete = (responses: QuizResponse) => {
    setQuizResponses(responses);
    setStep('results');
    toast.success("Analyse complétée ! Voici vos recommandations personnalisées");
  };

  const handleUserInfoUpdate = (info: {name: string, email: string}) => {
    setQuizResponses(prev => ({
      ...prev,
      name: info.name,
      email: info.email
    }));
  };

  const handleRestartQuiz = () => {
    setStep('intro');
    setShowMolecules(false);
    setQuizResponses({
      name: '',
      email: '',
      objectives: [],
      dietaryHabits: '',
      meatConsumption: '',
      fishConsumption: '',
      fruitVegConsumption: '',
      exerciseFrequency: '',
      sleepQuality: '',
      stressLevel: '',
      symptoms: []
    });
  };
  
  const getStableParticipantNumber = () => {
    const date = new Date();
    const dayOfMonth = date.getDate();
    return 1234 + ((dayOfMonth * 7) % 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-slate-50 relative">
      <LabEffects active={showMolecules} />
      
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {step === 'intro' && (
          <div className="text-center mb-10">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge variant="indigo" className="flex items-center gap-1">
                <Beaker className="h-3.5 w-3.5" />
                <span>Laboratoire Indépendant</span>
              </Badge>
              <Badge variant="pill" className="flex items-center gap-1">
                <Microscope className="h-3.5 w-3.5" />
                <span>Étude 16 semaines</span>
              </Badge>
              <Badge variant="pill" className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                <span>243 participants</span>
              </Badge>
              <Badge variant="active" className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5" />
                <span>72% de réduction des symptômes</span>
              </Badge>
              <Badge variant="pill" className="flex items-center gap-1">
                <Brain className="h-3.5 w-3.5" />
                <span>Analyse Neuropsychologique</span>
              </Badge>
            </div>
            
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full mb-6">
              <FlaskIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent">
              Votre Profil Nutritionnel Personnalisé
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Basé sur les dernières recherches scientifiques en nutrition
            </p>
          </div>
        )}
        
        {step === 'intro' && (
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-green-100/30 to-teal-100/30 rounded-full blur-2xl"></div>
            
            <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Découvrez les compléments dont vous avez besoin</h2>
            <p className="text-muted-foreground mb-8">
              Répondez à notre questionnaire de 5 minutes et obtenez des recommandations personnalisées 
              basées sur votre mode de vie, votre alimentation et vos objectifs de santé.
            </p>
            
            <div className="grid gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Microscope className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-indigo-900">Basé sur la science</h3>
                  <p className="text-muted-foreground">Nos recommandations s'appuient sur une étude menée auprès de 243 participants</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Brain className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-indigo-900">Personnalisé pour vous</h3>
                  <p className="text-muted-foreground">Notre algorithme analyse vos besoins spécifiques que 15% des laboratoires connaissent</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-700"><path d="M15 14c.2-1 .7-1.7 1.5-2"/><path d="M9 14c-.2-1-.7-1.7-1.5-2"/><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/><path d="M18 5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5Z"/></svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-indigo-900">Gratuit et sans engagement</h3>
                  <p className="text-muted-foreground">Recevez des conseils sans aucun coût ni obligation d'achat</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full text-lg py-6 group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md hover:shadow-lg" 
              onClick={startQuiz}
            >
              <span>Commencer mon bilan</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-center text-muted-foreground mt-6">
              Environ 5 minutes • 100% confidentiel • Utilisé par {getStableParticipantNumber()} membres
            </p>
            
            <div className="mt-8 p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-center gap-3">
              <div className="bg-amber-100 p-1.5 rounded-full flex-shrink-0">
                <Clock className="h-4 w-4 text-amber-700" />
              </div>
              <div>
                <p className="text-sm text-amber-800 font-medium">
                  Dernière session d'analyse disponible aujourd'hui
                </p>
                <p className="text-xs text-amber-700">
                  {Math.floor(Math.random() * 10) + 3} places restantes pour cette session
                </p>
              </div>
            </div>
          </div>
        )}
        
        {step === 'quiz' && (
          <NutritionalQuiz 
            onComplete={handleQuizComplete}
            onUserInfoUpdate={handleUserInfoUpdate}
          />
        )}
        
        {step === 'results' && (
          <QuizResults 
            responses={quizResponses}
            onRestart={handleRestartQuiz}
          />
        )}
      </div>
    </div>
  );
};

const Clock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const FlaskIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2v7.31"></path>
    <path d="M14 9.3V2"></path>
    <path d="M8.5 2h7"></path>
    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
    <path d="M5.52 16h12.96"></path>
  </svg>
);

export default Quiz;
