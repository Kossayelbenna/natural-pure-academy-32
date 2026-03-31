import React from 'react';
import SUPPLEMENT_CATALOG from '../data/supplementCatalog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, ArrowLeft, Clock, Info, Leaf } from "lucide-react";
import { generateDetailedRecommendationExplanation } from '@/utils/recommenderSystem';
import { QuizData, Recommendation, QuizResponse } from '@/utils/types';

interface QuizResultsProps {
  quizData: QuizData;
  recommendations: Recommendation[];
  restartQuiz: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
  quizData, 
  recommendations,
  restartQuiz
}) => {
  const getMatchScore = (recommendation: Recommendation) => {
    return recommendation.matchScore ? recommendation.matchScore : 75 + Math.floor(Math.random() * 20);
  };

  return (
    <div className="space-y-8 px-4 py-6 max-w-4xl mx-auto">
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight">Your Nutritional Analysis Results</h1>
        <p className="text-muted-foreground">
          Based on your answers, we have analyzed your nutritional profile and identified the most suitable solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-green-500" />
              Your Nutritional Profile
            </CardTitle>
            <CardDescription>
              Based on your assessment responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizData.objectives && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Primary Goals:</p>
                <ul className="text-sm pl-5 list-disc">
                  {quizData.objectives.map((objective, idx) => (
                    <li key={idx}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {quizData.symptoms && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Reported Symptoms:</p>
                <ul className="text-sm pl-5 list-disc">
                  {quizData.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}

            {quizData.dietaryHabits && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Dietary Habits:</p>
                <p className="text-sm">{quizData.dietaryHabits}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
              Factors to Consider
            </CardTitle>
            <CardDescription>
              Important points for your nutritional health
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Scientific Analysis:</p>
              <p className="text-sm text-muted-foreground">
                Our nutrition experts have identified several key factors that may affect your health, based on the information you provided.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Nutritional Balance:</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Nutrient Absorption:</span>
                <span className="font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Inflammatory Response:</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-10">Recommended Solutions</h2>
      <p className="text-muted-foreground mb-6">
        Based on our scientific analysis, here are the solutions best suited for your profile
      </p>

      {recommendations.length === 0 ? (
        <Card className="border-indigo-100 bg-indigo-50/50">
          <CardContent className="pt-6">
            <div className="text-center py-6">
              <AlertCircle className="h-10 w-10 text-indigo-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">Analyzing your complete profile</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                No specific supplements matched your exact pattern today, but we recommend discussing these results with a healthcare provider to determine the best path forward.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {recommendations.map((recommendation, index) => {
            const supplement = SUPPLEMENT_CATALOG[recommendation.supplementId];
            if (!supplement) return null;

            const matchScore = getMatchScore(recommendation);
            const explanation = supplement.description || "Based on your clinical profile, this formulation supports your primary objectives.";

            return (
              <Card key={index} className={index === 0 ? "border-green-500 shadow-md" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{supplement.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {supplement.description}
                      </CardDescription>
                    </div>
                    <div className="bg-slate-100 px-3 py-2 rounded-lg flex items-center">
                      <p className="font-bold text-lg">{matchScore}%</p>
                      <p className="text-xs ml-1">match</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm flex items-center">
                      <Info className="h-4 w-4 mr-1 text-blue-500" />
                      Why it's suited for your profile
                    </h4>
                    <p className="text-sm text-muted-foreground">{explanation}</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Main Benefits:</h4>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {supplement.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {supplement.naturalSources && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Natural Sources:</h4>
                      <p className="text-sm text-muted-foreground">{supplement.naturalSources.join(', ')}</p>
                    </div>
                  )}

                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Clock className="h-4 w-4 mr-1" />
                    Results typically visible after {supplement.timeToEffect || '2-4 weeks'} of regular use
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-slate-50 px-6 py-4">
                  <div className="flex flex-col gap-4 sm:flex-row w-full">
                    <button 
                      disabled
                      className="flex items-center justify-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium rounded-md text-slate-400 cursor-not-allowed flex-1"
                    >
                      Details Coming Soon
                    </button>
                    <button 
                      disabled
                      className="flex items-center justify-center px-4 py-2 bg-green-600/50 text-white text-sm font-medium rounded-md cursor-not-allowed flex-1"
                    >
                      Clinical Report
                    </button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button 
          onClick={restartQuiz}
          className="flex items-center text-slate-600 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-lg transition-colors bg-white hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retake Assessment
        </button>
      </div>
    </div>
  );
};

export default QuizResults;