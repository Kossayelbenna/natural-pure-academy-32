import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SymptomsStep from "@/components/quiz/SymptomsStep";
import DietaryHabitsStep from "@/components/quiz/DietaryHabitsStep";
import LifestyleStep from "@/components/quiz/LifestyleStep";
import ObjectivesStep from "@/components/quiz/ObjectivesStep";
import ProteinConsumptionStep from "@/components/quiz/ProteinConsumptionStep";
import QuizResults from "@/components/QuizResults";
import ScientificTrustBadges from "@/components/quiz/ScientificTrustBadges";
import { QuizStep } from "@/components/quiz/types";
import { FlaskConical, Brain, BookOpen, CheckCircle } from "lucide-react";

// Quiz steps configuration
const steps = [
  { id: "symptoms", label: "Symptoms" },
  { id: "dietaryHabits", label: "Diet" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "objectives", label: "Goals" },
  { id: "proteinConsumption", label: "Protein" }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizData, setQuizData] = useState<any>({
    symptoms: [],
    dietaryHabits: [],
    lifestyle: [],
    exerciseFrequency: "",
    sleepQuality: "",
    stressLevel: "",
    objectives: [],
    proteinConsumption: ""
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      completeQuiz();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const completeQuiz = () => {
    setQuizCompleted(true);
  };

  const updateQuizData = (key: string, data: any) => {
    setQuizData(prevData => ({
      ...prevData,
      [key]: data
    }));
  };

  const restartQuiz = () => {
    setQuizData({
      symptoms: [],
      dietaryHabits: [],
      lifestyle: [],
      exerciseFrequency: "",
      sleepQuality: "",
      stressLevel: "",
      objectives: [],
      proteinConsumption: ""
    });
    setCurrentStep(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <>
        <Navbar />
        <QuizResults quizData={quizData} restartQuiz={restartQuiz} />
        <Footer />
      </>
    );
  }

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case "symptoms":
        return (
          <SymptomsStep
            responses={{ symptoms: quizData.symptoms }}
            updateResponse={(field, value) => updateQuizData(field, value)}
          />
        );
      case "dietaryHabits":
        return (
          <DietaryHabitsStep
            responses={{ dietaryHabits: quizData.dietaryHabits }}
            updateResponse={(field, value) => updateQuizData(field, value)}
          />
        );
      case "lifestyle":
        return (
          <LifestyleStep
            responses={{
              lifestyle: quizData.lifestyle || [],
              exerciseFrequency: quizData.exerciseFrequency || "",
              sleepQuality: quizData.sleepQuality || "",
              stressLevel: quizData.stressLevel || ""
            }}
            updateResponse={(field, value) => updateQuizData(field, value)}
          />
        );
      case "objectives":
        return (
          <ObjectivesStep
            responses={{ objectives: quizData.objectives }}
            updateResponse={(field, value) => updateQuizData(field, value)}
          />
        );
      case "proteinConsumption":
        return (
          <ProteinConsumptionStep
            responses={{ proteinConsumption: quizData.proteinConsumption }}
            updateResponse={(field, value) => updateQuizData(field, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Nutritional Learning Assessment | NATURAL&PURE"
        description="Take NATURAL&PURE's science-based nutritional assessment. Free, no signup required. Get personalized, evidence-based nutrition guidance powered by AI."
        canonicalUrl="https://natural-and-pure.org/quiz"
        keywords={["nutrition quiz", "nutritional assessment", "personalized nutrition", "evidence-based", "free nutrition quiz"]}
      />

      <Navbar />

      <main>
        {/* Intro Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
                  <FlaskConical className="h-4 w-4" />
                  No signup required · Completely free
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Nutritional Learning Assessment
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                  A science-based quiz to help you understand your nutritional needs. Powered by peer-reviewed research and AI analysis.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                  {[
                    { icon: <Brain className="h-4 w-4 text-indigo-400" />, text: "AI-powered recommendations" },
                    { icon: <BookOpen className="h-4 w-4 text-blue-400" />, text: "Evidence-based science" },
                    { icon: <CheckCircle className="h-4 w-4 text-emerald-400" />, text: "100% free & private" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-12 bg-slate-50">
          <Container className="px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8"
            >
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-slate-500">
                    Step {currentStep + 1} of {steps.length}: <span className="text-slate-900">{steps[currentStep].label}</span>
                  </span>
                  <span className="text-sm text-slate-400">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`text-xs font-medium ${index <= currentStep ? 'text-emerald-600' : 'text-slate-400'}`}
                    >
                      {step.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <div className="mb-8">
                {renderStep()}
              </div>

              {/* Scientific Trust Badges */}
              <div className="mb-6">
                <ScientificTrustBadges />
              </div>

              {/* Navigation */}
              <div className="flex justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  id="quiz-prev-button"
                  className="rounded-xl border-slate-200"
                >
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  id="quiz-next-button"
                  className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8"
                >
                  {currentStep < steps.length - 1 ? "Next →" : "View My Results"}
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Quiz;