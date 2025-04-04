/**
 * Types pour le système de recommandation et d'IA
 */

export interface QuizResponse {
  personal?: {
    name?: string;
    email?: string;
    age?: string;
    gender?: string;
  };
  healthConcerns?: {
    stressLevel?: string;
    sleepIssues?: string;
    energyLevel?: string;
    focusIssues?: string;
    digestiveIssues?: string;
    [key: string]: string | undefined;
  };
  goals?: {
    weightLoss?: boolean;
    increaseEnergy?: boolean;
    improveFocus?: boolean;
    improveDigestion?: boolean;
    reduceStress?: boolean;
    [key: string]: boolean | undefined;
  };
  dietaryPreferences?: string[];
  [key: string]: any;
}

export interface Recommendation {
  id: string;
  name: string;
  description: string;
  priority: number;
  matchScore?: number;
  benefits?: string[];
  recommendedDose?: string;
  timeToEffect?: string;
  scientificBasis?: string;
  confidence?: number;
  reason: string;
  [key: string]: any;
}

export interface BehavioralMetrics {
  sessionDuration: number;   // Durée de la session de quiz en secondes
  hesitationCount: number;   // Nombre de fois où l'utilisateur a hésité (changé de réponse)
  changeCount: number;       // Nombre de modifications de réponses
  engagementScore: number;   // Score d'engagement calculé
  [key: string]: number;
}

export interface NeuroProfile {
  decisionStyle: 'intuitive' | 'analytical' | 'mixed';
  riskTolerance: 'conservative' | 'moderate' | 'adventurous';
  informationProcessing: 'visual' | 'textual' | 'interactive';
  motivationFactor: 'health' | 'appearance' | 'performance' | 'longevity';
  [key: string]: string;
}

export interface UserFeedback {
  helpful: boolean;
  relevance: number;         // 1-10
  purchaseIntent: number;    // 1-10
  comments?: string;
  [key: string]: any;
}

export interface LearningData {
  timestamp: number;
  quizData: QuizResponse;
  recommendationId: string;
  userFeedback: UserFeedback;
  [key: string]: any;
}

export interface AIModelState {
  version: number;
  trainingIterations: number;
  supplementScores: Record<string, SupplementScore>;
  symptomWeights: Record<string, number>;
  goalWeights: Record<string, number>;
  userProfiles: UserProfile[];
  performanceMetrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    lastEvaluated: string;
  };
  featureImportance: Record<string, number>;
  seasonalPatterns: Record<string, SeasonalPattern>;
}

export interface SeasonalPattern {
  name: string;
  startMonth: number;
  endMonth: number;
  relatedSymptoms: string[];
  relatedSupplements: string[];
  description: string;
  confidence: number;
}

export interface PredictiveInsight {
  type: 'seasonal' | 'statistical' | 'personalized';
  symptom: string;
  relevance: number;
  supplements: string[];
  description: string;
  confidence?: number;
}

export interface SupplementSynergy {
  primaryId: string;
  secondaryId: string;
  effect: 'enhance' | 'reduce' | 'neutral';
  description: string;
  strengthPercent: number;
  evidence: 'strong' | 'moderate' | 'theoretical';
}

// Placeholder types -  replace with actual implementations
export interface SupplementScore {}
export interface UserProfile {}
/**
 * Types pour le système de recommandation nutritionnelle
 */

// Type pour les réponses du quiz
export interface QuizData {
  symptoms?: string[];
  dietaryHabits?: string;
  lifestyle?: string[];
  exerciseFrequency?: string;
  sleepQuality?: string;
  stressLevel?: string;
  objectives?: string[];
  proteinConsumption?: string;
  age?: number;
  gender?: string;
  [key: string]: any; // Pour les propriétés supplémentaires
}

// Interface pour les recommandations
export interface Recommendation {
  id: string;
  title: string;
  description: string;
  scientificBasis: string;
  relevanceScore: number;
  categories: string[];
  relatedTerms: string[];
  recommendedDose?: string;
}

// Interface pour les réponses du quiz complètes
export interface QuizResponse {
  symptoms?: string[];
  dietaryHabits?: string;
  lifestyle?: string[];
  objectives?: string[];
  proteinConsumption?: string;
  age?: number;
  gender?: string;
  [key: string]: any;
}

// Interface pour un supplément nutritionnel
export interface Supplement {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  benefits: string[];
  scientificBasis: string;
  standardDose: string;
  timeToEffect: string;
  contraindications?: string[];
  interactions?: string[];
  researchScore?: number;
  safetyProfile?: number;
  naturalSources?: string[];
  categories?: string[];
}

// Interface pour les métriques comportementales
export interface BehavioralMetrics {
  timeSpentOnQuiz?: number;
  revisitedQuestions?: string[];
  hesitationPatterns?: {[key: string]: number};
  clickPatterns?: any[];
  viewportTime?: {[key: string]: number};
  [key: string]: any;
}

// Interface pour le profil neuronal
export interface NeuroProfile {
  decisionStyle?: 'analytical' | 'intuitive' | 'mixed';
  confidenceLevel?: number;
  informationProcessingSpeed?: number;
  riskTolerance?: 'low' | 'medium' | 'high';
  [key: string]: any;
}

// Interface pour le feedback utilisateur
export interface UserFeedback {
  recommendationId: string;
  rating: number;
  comment?: string;
  timestamp: number;
  userId?: string;
}

// Interface pour les données d'apprentissage
export interface LearningData {
  quizResponses: QuizResponse;
  generatedRecommendations: Recommendation[];
  userFeedback?: UserFeedback[];
  behavioralMetrics?: BehavioralMetrics;
  timestamp: number;
  userId?: string;
}

// Interface pour la base de recommandation simplifiée
export interface BaseRecommendation {
  id: string;
  title: string;
  relevanceScore: number;
  recommendedDose?: string;
  categories?: string[];
}
