/**
 * Mappings entre symptômes/objectifs et compléments recommandés
 * Basé sur les recherches scientifiques et l'expérience clinique
 */

import { SUPPLEMENT_CATALOG } from './supplementCatalog';
import { SymptomRecommendation, GoalRecommendation, LifestyleRecommendation } from '../types/recommendations';

// Structure pour la catégorisation des symptômes rapportés
export interface SymptomCategory {
  id: string;
  name: string;
  description: string;
  priority: number; // 1-10, 10 étant la plus élevée pour l'impact sur la santé
  keywords: string[];
  relatedQuestions: string[]; // IDs des questions de quiz liées
}

// Structure des seuils d'intensité des symptômes
export interface SymptomIntensityThresholds {
  mild: number;
  moderate: number;
  severe: number;
}

// Structure des recommandations par symptôme
export interface SymptomRecommendation {
  id: string; // ID du supplément
  priority: number; // 1-10, priorité de recommandation
  doseStandard: string; // Dosage standard
  doseVegetarian: string | null; // Dosage pour végétariens ou null si non adapté
}

// Structure des recommandations par objectif
export interface GoalRecommendation {
  id: string; // ID du supplément
  priority: number; // 1-10, priorité de recommandation
  doseStandard: string; // Dosage standard
  doseVegetarian: string | null; // Dosage pour végétariens ou null si non adapté
}

// Structure des recommandations par mode de vie
export interface LifestyleRecommendation {
  id: string;
  priority: number;
}


// Catégorisation des symptômes
export const SYMPTOM_CATEGORIES: Record<string, SymptomCategory> = {
  // === STRESS ET ANXIÉTÉ ===
  stress: {
    id: "stress",
    name: "Stress et Anxiété",
    description: "Sensation de tension, d'inquiétude ou de nervosité",
    priority: 9,
    keywords: ["anxiété", "nervosité", "tension", "inquiétude", "pression", "agitation"],
    relatedQuestions: ["stress_level", "stress_frequency", "stress_symptoms"]
  },

  panic: {
    id: "panic",
    name: "Attaques de panique",
    description: "Épisodes de peur intense et symptômes physiques aigus",
    priority: 10,
    keywords: ["crise d'angoisse", "panique", "hyperventilation", "palpitations", "transpiration"],
    relatedQuestions: ["panic_frequency", "panic_severity"]
  },
  // === HUMEUR ===
  mood: {
    id: "mood",
    name: "Fluctuations d'humeur",
    description: "Variations importantes de l'humeur au cours de la journée",
    priority: 7,
    keywords: ["irritabilité", "sautes d'humeur", "variations", "instabilité", "émotions"],
    relatedQuestions: ["mood_swings", "emotional_stability"]
  },

  depression: {
    id: "depression",
    name: "Humeur basse",
    description: "Sentiment persistant de tristesse ou de perte d'intérêt",
    priority: 8,
    keywords: ["tristesse", "mélancolie", "déprime", "pessimisme", "abattement"],
    relatedQuestions: ["depression_score", "depression_duration"]
  },
  // === SOMMEIL ===
  insomnia: {
    id: "insomnia",
    name: "Insomnie",
    description: "Difficulté à s'endormir ou à maintenir le sommeil",
    priority: 9,
    keywords: ["difficulté à dormir", "réveils nocturnes", "sommeil perturbé", "éveil précoce"],
    relatedQuestions: ["sleep_quality", "sleep_duration", "sleep_onset_time"]
  },

  sleep_quality: {
    id: "sleep_quality",
    name: "Qualité du sommeil",
    description: "Sommeil non réparateur ou agité",
    priority: 8,
    keywords: ["sommeil léger", "non réparateur", "agité", "rêves intenses", "cauchemars"],
    relatedQuestions: ["sleep_quality", "sleep_depth", "sleep_refreshed"]
  },
  // === ÉNERGIE ===
  fatigue: {
    id: "fatigue",
    name: "Fatigue chronique",
    description: "Épuisement persistant et manque d'énergie",
    priority: 8,
    keywords: ["épuisement", "manque d'énergie", "léthargie", "faiblesse", "apathie"],
    relatedQuestions: ["energy_level", "fatigue_severity", "fatigue_timing"]
  },

  morning_fatigue: {
    id: "morning_fatigue",
    name: "Fatigue matinale",
    description: "Difficulté particulière à se lever le matin ou fatigue intense au réveil",
    priority: 7,
    keywords: ["épuisement au réveil", "inertie du sommeil", "réveil difficile"],
    relatedQuestions: ["morning_energy", "wakeup_difficulty"]
  },

  afternoon_slump: {
    id: "afternoon_slump",
    name: "Chute d'énergie après-midi",
    description: "Baisse significative d'énergie et de concentration en après-midi",
    priority: 6,
    keywords: ["coup de pompe", "somnolence après-midi", "baisse d'attention"],
    relatedQuestions: ["afternoon_energy", "energy_fluctuation"]
  },
  // === DIGESTION ===
  bloating: {
    id: "bloating",
    name: "Ballonnements",
    description: "Sensation de plénitude ou de distension abdominale",
    priority: 6,
    keywords: ["ventre gonflé", "gaz", "distension", "inconfort abdominal"],
    relatedQuestions: ["bloating_frequency", "bloating_severity"]
  },

  constipation: {
    id: "constipation",
    name: "Constipation",
    description: "Selles peu fréquentes, difficiles à évacuer ou incomplètes",
    priority: 7,
    keywords: ["transit lent", "selles dures", "difficulté à évacuer"],
    relatedQuestions: ["bowel_movement_frequency", "stool_consistency"]
  },

  diarrhea: {
    id: "diarrhea",
    name: "Diarrhée",
    description: "Selles liquides ou molles fréquentes",
    priority: 7,
    keywords: ["selles liquides", "transit rapide", "urgence intestinale"],
    relatedQuestions: ["bowel_movement_frequency", "stool_consistency"]
  },

  ibs: {
    id: "ibs",
    name: "Syndrome de l'intestin irritable",
    description: "Troubles digestifs fonctionnels récurrents",
    priority: 8,
    keywords: ["colon irritable", "douleurs abdominales", "troubles du transit"],
    relatedQuestions: ["ibs_symptoms", "digestive_pain"]
  },
  // === COGNITION ===
  focus: {
    id: "focus",
    name: "Problèmes de concentration",
    description: "Difficulté à maintenir l'attention sur une tâche",
    priority: 7,
    keywords: ["distraction", "attention", "concentration", "dispersion"],
    relatedQuestions: ["focus_duration", "focus_difficulty"]
  },

  memory: {
    id: "memory",
    name: "Problèmes de mémoire",
    description: "Difficulté à mémoriser ou à se rappeler l'information",
    priority: 8,
    keywords: ["oublis", "mémoire à court terme", "rappel", "mémoire de travail"],
    relatedQuestions: ["memory_issues", "memory_type"]
  },

  brain_fog: {
    id: "brain_fog",
    name: "Brouillard mental",
    description: "Sensation de confusion, de pensée ralentie ou peu claire",
    priority: 7,
    keywords: ["confusion", "pensée lente", "clarté mentale réduite", "brume cérébrale"],
    relatedQuestions: ["cognitive_clarity", "thinking_speed"]
  },
  // === SYSTÈME IMMUNITAIRE ===
  immunity: {
    id: "immunity",
    name: "Immunité faible",
    description: "Tendance à contracter facilement des infections",
    priority: 8,
    keywords: ["infections fréquentes", "rhumes répétitifs", "récupération lente"],
    relatedQuestions: ["illness_frequency", "recovery_time"]
  },

  allergies: {
    id: "allergies",
    name: "Réactions allergiques",
    description: "Symptômes d'allergie saisonnière ou permanente",
    priority: 7,
    keywords: ["rhinite", "éternuements", "congestion", "démangeaisons"],
    relatedQuestions: ["allergy_symptoms", "allergy_triggers"]
  },
  // === HORMONES ET MÉTABOLISME ===
  blood_sugar: {
    id: "blood_sugar",
    name: "Déséquilibres glycémiques",
    description: "Fluctuations de la glycémie avec symptômes associés",
    priority: 8,
    keywords: ["hypoglycémie", "hyperglycémie", "fringales", "soif excessive"],
    relatedQuestions: ["sugar_cravings", "energy_after_meals"]
  },

  weight_management: {
    id: "weight_management",
    name: "Gestion du poids",
    description: "Difficultés à maintenir un poids stable ou à perdre du poids",
    priority: 7,
    keywords: ["prise de poids", "difficulté à maigrir", "métabolisme lent"],
    relatedQuestions: ["weight_struggles", "weight_fluctuations"]
  },

  hormonal_imbalance: {
    id: "hormonal_imbalance",
    name: "Déséquilibres hormonaux",
    description: "Symptômes liés à des variations hormonales",
    priority: 8,
    keywords: ["SPM", "ménopause", "andropause", "thyroïde", "cycle irrégulier"],
    relatedQuestions: ["hormonal_symptoms", "cycle_regularity"]
  },
  // === DOULEUR ET INFLAMMATION ===
  joint_pain: {
    id: "joint_pain",
    name: "Douleurs articulaires",
    description: "Inconfort, raideur ou douleur dans les articulations",
    priority: 7,
    keywords: ["arthrite", "raideur", "gonflement", "mobilité réduite"],
    relatedQuestions: ["joint_pain_location", "joint_pain_severity"]
  },

  muscle_pain: {
    id: "muscle_pain",
    name: "Douleurs musculaires",
    description: "Tension, sensibilité ou douleur dans les muscles",
    priority: 6,
    keywords: ["courbatures", "spasmes", "tensions", "fibromyalgie"],
    relatedQuestions: ["muscle_pain_location", "muscle_pain_trigger"]
  },

  inflammation: {
    id: "inflammation",
    name: "Inflammation chronique",
    description: "État inflammatoire persistant dans l'organisme",
    priority: 8,
    keywords: ["rougeur", "gonflement", "chaleur", "douleur", "sensibilité"],
    relatedQuestions: ["inflammation_markers", "inflammation_symptoms"]
  },
  // === CARDIOVASCULAIRE ===
  heart_health: {
    id: "heart_health",
    name: "Santé cardiovasculaire",
    description: "Facteurs de risque ou symptômes liés au système cardiovasculaire",
    priority: 9,
    keywords: ["palpitations", "pression artérielle", "cholestérol", "circulation"],
    relatedQuestions: ["heart_symptoms", "cardiovascular_risk"]
  }
};

// Définir les seuils d'intensité pour les symptômes
export const SYMPTOM_INTENSITY: SymptomIntensityThresholds = {
  mild: 3,
  moderate: 6,
  severe: 8
};

// Recommandations de suppléments par symptôme
export const SYMPTOM_RECOMMENDATIONS: Record<string, SymptomRecommendation[]> = {
  // === STRESS ET ANXIÉTÉ ===
  stress: [
    {
      id: "ashwagandha",
      priority: 10,
      doseStandard: "500-600mg d'extrait standardisé par jour",
      doseVegetarian: "500-600mg d'extrait standardisé par jour"
    },
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (bisglycinate ou citrate) le soir",
      doseVegetarian: "300-400mg (bisglycinate ou citrate) le soir"
    },
    {
      id: "l_theanine",
      priority: 8,
      doseStandard: "200-400mg par jour",
      doseVegetarian: "200-400mg par jour"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "400-600mg d'extrait standardisé le matin",
      doseVegetarian: "400-600mg d'extrait standardisé le matin"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule par jour avec le petit-déjeuner",
      doseVegetarian: "1 gélule par jour avec le petit-déjeuner"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI par jour avec un repas gras",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI par jour avec un repas gras",
      doseVegetarian: "2000-4000 UI par jour avec un repas gras"
    },
    {
      id: "omega3",
      priority: 7,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 7,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    }
  ],

  panic: [
    {
      id: "l_theanine",
      priority: 10,
      doseStandard: "200mg en crise, 400mg/jour en prévention",
      doseVegetarian: "200mg en crise, 400mg/jour en prévention"
    },
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (bisglycinate) par jour",
      doseVegetarian: "300-400mg (bisglycinate) par jour"
    },
    {
      id: "ashwagandha",
      priority: 8,
      doseStandard: "600mg d'extrait standardisé par jour",
      doseVegetarian: "600mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule par jour",
      doseVegetarian: "1 gélule par jour"
    }
  ],

  mood: [
    {
      id: "rhodiola",
      priority: 9,
      doseStandard: "400-600mg d'extrait standardisé par jour",
      doseVegetarian: "400-600mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_d3",
      priority: 9,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 9,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: "2000-5000 UI par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 8,
      doseStandard: "1 gélule par jour le matin",
      doseVegetarian: "1 gélule par jour le matin"
    },
    {
      id: "omega3",
      priority: 8,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 8,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    }
  ],

  depression: [
    {
      id: "vitamin_d3",
      priority: 10,
      doseStandard: "4000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 10,
      doseStandard: "4000-5000 UI par jour",
      doseVegetarian: "4000-5000 UI par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 8,
      doseStandard: "1 gélule par jour",
      doseVegetarian: "1 gélule par jour"
    },
    {
      id: "saffron",
      priority: 8,
      doseStandard: "30mg d'extrait standardisé par jour",
      doseVegetarian: "30mg d'extrait standardisé par jour"
    },
    {
      id: "rhodiola",
      priority: 7,
      doseStandard: "400-600mg d'extrait standardisé par jour",
      doseVegetarian: "400-600mg d'extrait standardisé par jour"
    }
  ],

  // === SOMMEIL ===
  insomnia: [
    {
      id: "magnesium",
      priority: 10,
      doseStandard: "300-400mg (bisglycinate) 1h avant le coucher",
      doseVegetarian: "300-400mg (bisglycinate) 1h avant le coucher"
    },
    {
      id: "glycine",
      priority: 9,
      doseStandard: "3g avant le coucher",
      doseVegetarian: "3g avant le coucher"
    },
    {
      id: "l_theanine",
      priority: 8,
      doseStandard: "200-400mg avant le coucher",
      doseVegetarian: "200-400mg avant le coucher"
    },
    {
      id: "ashwagandha",
      priority: 7,
      doseStandard: "300-600mg d'extrait standardisé le soir",
      doseVegetarian: "300-600mg d'extrait standardisé le soir"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: "2000-4000 UI le matin"
    }
  ],

  sleep_quality: [
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (bisglycinate) le soir",
      doseVegetarian: "300-400mg (bisglycinate) le soir"
    },
    {
      id: "glycine",
      priority: 9,
      doseStandard: "3g avant le coucher",
      doseVegetarian: "3g avant le coucher"
    },
    {
      id: "l_theanine",
      priority: 7,
      doseStandard: "200mg avant le coucher",
      doseVegetarian: "200mg avant le coucher"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: "2000-4000 UI le matin"
    }
  ],

  // === ÉNERGIE ===
  fatigue: [
    {
      id: "vitamin_b_complex",
      priority: 10,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    },
    {
      id: "vitamin_d3",
      priority: 9,
      doseStandard: "2000-5000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 9,
      doseStandard: "2000-5000 UI le matin",
      doseVegetarian: "2000-5000 UI le matin"
    },
    {
      id: "iron",
      priority: 9,
      doseStandard: "18-25mg par jour (si carence confirmée)",
      doseVegetarian: "18-25mg par jour (si carence confirmée)"
    },
    {
      id: "coq10",
      priority: 8,
      doseStandard: "100-200mg par jour (ubiquinol)",
      doseVegetarian: "100-200mg par jour (ubiquinol)"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "400-600mg d'extrait standardisé le matin",
      doseVegetarian: "400-600mg d'extrait standardisé le matin"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    }
  ],

  morning_fatigue: [
    {
      id: "vitamin_b_complex",
      priority: 9,
      doseStandard: "1 gélule avec le petit-déjeuner",
      doseVegetarian: "1 gélule avec le petit-déjeuner"
    },
    {
      id: "vitamin_d3",
      priority: 9,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 9,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: "2000-4000 UI le matin"
    },
    {
      id: "iron",
      priority: 8,
      doseStandard: "18-25mg le matin (si carence confirmée)",
      doseVegetarian: "18-25mg le matin (si carence confirmée)"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "300-600mg d'extrait standardisé le matin",
      doseVegetarian: "300-600mg d'extrait standardisé le matin"
    }
  ],

  afternoon_slump: [
    {
      id: "rhodiola",
      priority: 9,
      doseStandard: "200-400mg d'extrait standardisé le matin",
      doseVegetarian: "200-400mg d'extrait standardisé le matin"
    },
    {
      id: "vitamin_b_complex",
      priority: 8,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    },
    {
      id: "coq10",
      priority: 7,
      doseStandard: "100-200mg avec le déjeuner",
      doseVegetarian: "100-200mg avec le déjeuner"
    },
    {
      id: "l_theanine",
      priority: 7,
      doseStandard: "100-200mg en début d'après-midi",
      doseVegetarian: "100-200mg en début d'après-midi"
    }
  ],

  // === DIGESTION ===
  bloating: [
    {
      id: "probiotics",
      priority: 10,
      doseStandard: "20-30 milliards UFC par jour",
      doseVegetarian: "20-30 milliards UFC par jour"
    },
    {
      id: "digestive_enzymes",
      priority: 9,
      doseStandard: "1-2 gélules avant les repas principaux",
      doseVegetarian: "1-2 gélules avant les repas principaux"
    },
    {
      id: "ginger",
      priority: 8,
      doseStandard: "500-1000mg d'extrait par jour",
      doseVegetarian: "500-1000mg d'extrait par jour"
    },
    {
      id: "fennel",
      priority: 7,
      doseStandard: "1-2g de graines après les repas",
      doseVegetarian: "1-2g de graines après les repas"
    }
  ],

  constipation: [
    {
      id: "fiber_complex",
      priority: 10,
      doseStandard: "5-10g par jour avec beaucoup d'eau",
      doseVegetarian: "5-10g par jour avec beaucoup d'eau"
    },
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (citrate) le soir",
      doseVegetarian: "300-400mg (citrate) le soir"
    },
    {
      id: "probiotics",
      priority: 8,
      doseStandard: "20-30 milliards UFC par jour",
      doseVegetarian: "20-30 milliards UFC par jour"
    }
  ],

  diarrhea: [
    {
      id: "probiotics",
      priority: 10,
      doseStandard: "30-50 milliards UFC par jour",
      doseVegetarian: "30-50 milliards UFC par jour"
    },
    {
      id: "l_glutamine",
      priority: 9,
      doseStandard: "5g par jour à jeun",
      doseVegetarian: "5g par jour à jeun"
    },
    {
      id: "zinc",
      priority: 8,
      doseStandard: "15-30mg par jour pendant les épisodes",
      doseVegetarian: "15-30mg par jour pendant les épisodes"
    }
  ],

  ibs: [
    {
      id: "probiotics",
      priority: 10,
      doseStandard: "20-50 milliards UFC par jour",
      doseVegetarian: "20-50 milliards UFC par jour"
    },
    {
      id: "peppermint_oil",
      priority: 9,
      doseStandard: "1-2 gélules gastro-résistantes par jour",
      doseVegetarian: "1-2 gélules gastro-résistantes par jour"
    },
    {
      id: "l_glutamine",
      priority: 8,
      doseStandard: "5g par jour à jeun",
      doseVegetarian: "5g par jour à jeun"
    },
    {
      id: "fiber_complex",
      priority: 7,
      doseStandard: "3-5g par jour avec beaucoup d'eau",
      doseVegetarian: "3-5g par jour avec beaucoup d'eau"
    }
  ],

  // === COGNITION ===
  focus: [
    {
      id: "bacopa",
      priority: 10,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "l_theanine",
      priority: 9,
      doseStandard: "100-200mg 1-2 fois par jour",
      doseVegetarian: "100-200mg 1-2 fois par jour"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "300-500mg d'extrait standardisé le matin",
      doseVegetarian: "300-500mg d'extrait standardisé le matin"
    },
    {
      id: "lion_mane",
      priority: 8,
      doseStandard: "1000-3000mg d'extrait par jour",
      doseVegetarian: "1000-3000mg d'extrait par jour"
    },
    {
      id: "omega3",
      priority: 7,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 7,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    }
  ],

  memory: [
    {
      id: "bacopa",
      priority: 10,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "lion_mane",
      priority: 9,
      doseStandard: "1000-3000mg d'extrait par jour",
      doseVegetarian: "1000-3000mg d'extrait par jour"
    },
    {
      id: "choline",
      priority: 9,
      doseStandard: "250-500mg (alpha-GPC ou citicoline) par jour",
      doseVegetarian: "250-500mg (alpha-GPC ou citicoline) par jour"
    },
    {
      id: "omega3",
      priority: 8,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 8,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "ginkgo",
      priority: 7,
      doseStandard: "120-240mg d'extrait standardisé par jour",
      doseVegetarian: "120-240mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    }
  ],

  brain_fog: [
    {
      id: "lion_mane",
      priority: 9,
      doseStandard: "1000-3000mg d'extrait par jour",
      doseVegetarian: "1000-3000mg d'extrait par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 8,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "300-600mg d'extrait standardisé le matin",
      doseVegetarian: "300-600mg d'extrait standardisé le matin"
    },
    {
      id: "nac",
      priority: 7,
      doseStandard: "600-1200mg par jour",
      doseVegetarian: "600-1200mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  // === SYSTÈME IMMUNITAIRE ===
  immunity: [
    {
      id: "vitamin_d3",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: "2000-5000 UI par jour"
    },
    {
      id: "vitamin_c",
      priority: 9,
      doseStandard: "500-1000mg 1-2 fois par jour",
      doseVegetarian: "500-1000mg 1-2 fois par jour"
    },
    {
      id: "zinc",
      priority: 9,
      doseStandard: "15-30mg par jour",
      doseVegetarian: "15-30mg par jour"
    },
    {
      id: "mushroom_complex",
      priority: 8,
      doseStandard: "1000-3000mg par jour",
      doseVegetarian: "1000-3000mg par jour"
    },
    {
      id: "probiotics",
      priority: 7,
      doseStandard: "10-30 milliards UFC par jour",
      doseVegetarian: "10-30 milliards UFC par jour"
    }
  ],

  allergies: [
    {
      id: "quercetin",
      priority: 10,
      doseStandard: "500-1000mg par jour",
      doseVegetarian: "500-1000mg par jour"
    },
    {
      id: "vitamin_c",
      priority: 8,
      doseStandard: "1000-2000mg par jour",
      doseVegetarian: "1000-2000mg par jour"
    },
    {
      id: "nac",
      priority: 7,
      doseStandard: "600-1200mg par jour",
      doseVegetarian: "600-1200mg par jour"
    },
    {
      id: "probiotics",
      priority: 7,
      doseStandard: "10-30 milliards UFC par jour",
      doseVegetarian: "10-30 milliards UFC par jour"
    }
  ],

  // === HORMONES ET MÉTABOLISME ===
  blood_sugar: [
    {
      id: "berberine",
      priority: 10,
      doseStandard: "500mg 2-3 fois par jour avec les repas",
      doseVegetarian: "500mg 2-3 fois par jour avec les repas"
    },
    {
      id: "chromium",
      priority: 9,
      doseStandard: "200-400mcg par jour",
      doseVegetarian: "200-400mcg par jour"
    },
    {
      id: "fiber_complex",
      priority: 8,
      doseStandard: "5-10g par jour avant les repas",
      doseVegetarian: "5-10g par jour avant les repas"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "alpha_lipoic_acid",
      priority: 7,
      doseStandard: "600-1200mg par jour",
      doseVegetarian: "600-1200mg par jour"
    }
  ],

  weight_management: [
    {
      id: "fiber_complex",
      priority: 9,
      doseStandard: "10-15g par jour avec beaucoup d'eau",
      doseVegetarian: "10-15g par jour avec beaucoup d'eau"
    },
    {
      id: "berberine",
      priority: 8,
      doseStandard: "500mg 2-3 fois par jour avec les repas",
      doseVegetarian: "500mg 2-3 fois par jour avec les repas"
    },
    {
      id: "probiotics",
      priority: 7,
      doseStandard: "10-30 milliards UFC par jour",
      doseVegetarian: "10-30 milliards UFC par jour"
    },
    {
      id: "chromium",
      priority: 7,
      doseStandard: "200-400mcg par jour",
      doseVegetarian: "200-400mcg par jour"
    },
    {
      id: "magnesium",
      priority: 6,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  hormonal_imbalance: [
    {
      id: "ashwagandha",
      priority: 9,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_d3",
      priority: 8,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 8,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    },
    {
      id: "magnesium",
      priority: 8,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "zinc",
      priority: 7,
      doseStandard: "15-30mg par jour",
      doseVegetarian: "15-30mg par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule par jour",
      doseVegetarian: "1 gélule par jour"
    }
  ],

  // === DOULEUR ET INFLAMMATION ===
  joint_pain: [
    {
      id: "curcumin",
      priority: 10,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "2000-3000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "3000-4000mg par jour",
      doseVegetarian: "3000-4000mg par jour"
    },
    {
      id: "boswellia",
      priority: 8,
      doseStandard: "300-500mg d'extrait standardisé 2-3 fois par jour",
      doseVegetarian: "300-500mg d'extrait standardisé 2-3 fois par jour"
    },
    {
      id: "collagen",
      priority: 8,
      doseStandard: "10-15g par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  muscle_pain: [
    {
      id: "magnesium",
      priority: 10,
      doseStandard: "300-400mg (bisglycinate ou malate) par jour",
      doseVegetarian: "300-400mg (bisglycinate ou malate) par jour"
    },
    {
      id: "curcumin",
      priority: 8,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    },
    {
      id: "omega3",
      priority: 7,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 7,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    }
  ],

  inflammation: [
    {
      id: "curcumin",
      priority: 10,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "2000-3000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "3000-4000mg par jour",
      doseVegetarian: "3000-4000mg par jour"
    },
    {
      id: "boswellia",
      priority: 8,
      doseStandard: "300-500mg d'extrait standardisé 2-3 fois par jour",
      doseVegetarian: "300-500mg d'extrait standardisé 2-3 fois par jour"
    },
    {
      id: "quercetin",
      priority: 7,
      doseStandard: "500-1000mg par jour",
      doseVegetarian: "500-1000mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  // === CARDIOVASCULAIRE ===
  heart_health: [
    {
      id: "omega3",
      priority: 10,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 10,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "coq10",
      priority: 9,
      doseStandard: "100-300mg (de préférence ubiquinol) par jour",
      doseVegetarian: "100-300mg (de préférence ubiquinol) par jour"
    },
    {
      id: "magnesium",
      priority: 8,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    },
    {
      id: "garlic_extract",
      priority: 7,
      doseStandard: "600-1200mg d'extrait âgé par jour",
      doseVegetarian: "600-1200mg d'extrait âgé par jour"
    }
  ]
};

// Objectifs de santé et suppléments recommandés
export const GOAL_RECOMMENDATIONS: Record<string, GoalRecommendation[]> = {
  // === PERFORMANCE PHYSIQUE ===
  energy_boost: [
    {
      id: "vitamin_b_complex",
      priority: 10,
      doseStandard: "1 gélule le matin",
      doseVegetarian: "1 gélule le matin"
    },
    {
      id: "coq10",
      priority: 9,
      doseStandard: "100-200mg (ubiquinol) par jour",
      doseVegetarian: "100-200mg (ubiquinol) par jour"
    },
    {
      id: "rhodiola",
      priority: 9,
      doseStandard: "300-600mg d'extrait standardisé le matin",
      doseVegetarian: "300-600mg d'extrait standardisé le matin"
    },
    {
      id: "iron",
      priority: 8,
      doseStandard: "18-25mg par jour (si carence confirmée)",
      doseVegetarian: "18-25mg par jour (si carence confirmée)"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: "2000-4000 UI le matin"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    }
  ],

  athletic_performance: [
    {
      id: "creatine",
      priority: 10,
      doseStandard: "3-5g par jour",
      doseVegetarian: "3-5g par jour"
    },
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (malate ou bisglycinate) par jour",
      doseVegetarian: "300-400mg (malate ou bisglycinate) par jour"
    },
    {
      id: "vitamin_d3",
      priority: 8,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 8,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: "2000-5000 UI par jour"
    },
    {
      id: "beta_alanine",
      priority: 8,
      doseStandard: "3-6g par jour",
      doseVegetarian: "3-6g par jour"
    },
    {
      id: "ashwagandha",
      priority: 7,
      doseStandard: "600mg d'extrait standardisé par jour",
      doseVegetarian: "600mg d'extrait standardisé par jour"
    },
    {
      id: "rhodiola",
      priority: 7,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    }
  ],

  recovery_optimization: [
    {
      id: "magnesium",
      priority: 10,
      doseStandard: "300-400mg (malate ou bisglycinate) par jour",
      doseVegetarian: "300-400mg (malate ou bisglycinate) par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "2000-3000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "3000-4000mg par jour",
      doseVegetarian: "3000-4000mg par jour"
    },
    {
      id: "curcumin",
      priority: 8,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "tart_cherry",
      priority: 8,
      doseStandard: "500-1500mg d'extrait par jour",
      doseVegetarian: "500-1500mg d'extrait par jour"
    },
    {
      id: "glycine",
      priority: 7,
      doseStandard: "3-5g avant le coucher",
      doseVegetarian: "3-5g avant le coucher"
    }
  ],

  // === SANTÉ MENTALE ===
  stress_management: [
    {
      id: "ashwagandha",
      priority: 10,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "magnesium",
      priority: 9,
      doseStandard: "300-400mg (bisglycinate) par jour",
      doseVegetarian: "300-400mg (bisglycinate) par jour"
    },
    {
      id: "l_theanine",
      priority: 9,
      doseStandard: "200-400mg par jour",
      doseVegetarian: "200-400mg par jour"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule par jour",
      doseVegetarian: "1 gélule par jour"
    },
    {
      id: "omega3",
      priority: 7,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 7,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    }
  ],

  mood_support: [
    {
      id: "vitamin_d3",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: "2000-5000 UI par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "saffron",
      priority: 8,
      doseStandard: "30mg d'extrait standardisé par jour",
      doseVegetarian: "30mg d'extrait standardisé par jour"
    },
    {
      id: "rhodiola",
      priority: 8,
      doseStandard: "300-600mg d'extrait standardisé par jour",
      doseVegetarian: "300-600mg d'extrait standardisé par jour"
    },
    {
      id: "vitamin_b_complex",
      priority: 7,
      doseStandard: "1 gélule par jour",
      doseVegetarian: "1 gélule par jour"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg (bisglycinate) par jour",
      doseVegetarian: "300-400mg (bisglycinate) par jour"
    }
  ],

  sleep_improvement: [
    {
      id: "magnesium",
      priority: 10,
      doseStandard: "300-400mg (bisglycinate) avant le coucher",
      doseVegetarian: "300-400mg (bisglycinate) avant le coucher"
    },
    {
      id: "glycine",
      priority: 9,
      doseStandard: "3g avant le coucher",
      doseVegetarian: "3g avant le coucher"
    },
    {
      id: "l_theanine",
      priority: 8,
      doseStandard: "200-400mg avant le coucher",
      doseVegetarian: "200-400mg avant le coucher"
    },
    {
      id: "ashwagandha",
      priority: 7,
      doseStandard: "300-600mg d'extrait standardisé le soir",
      doseVegetarian: "300-600mg d'extrait standardisé le soir"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI le matin",
      doseVegetarian: "2000-4000 UI le matin"
    }
  ],

  cognitive_performance: [
    {
      id: "bacopa",
      priority: 9,
      doseStandard: "300-600mg par jour",
      doseVegetarian: "300-600mg par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "1000-2000mg EPA/DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 8,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "choline",
      priority: 8,
      doseStandard: "250-500mg par jour",
      doseVegetarian: "250-500mg par jour"
    },
    {
      id: "lion_mane",
      priority: 8,
      doseStandard: "1000-3000mg par jour",
      doseVegetarian: "1000-3000mg par jour"
    },
    {
      id: "rhodiola",
      priority: 7,
      doseStandard: "300-600mg par jour",
      doseVegetarian: "300-600mg par jour"
    },
    {
      id: "l_theanine",
      priority: 7,
      doseStandard: "100-200mg par jour",
      doseVegetarian: "100-200mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  // === MÉTABOLISME ET POIDS ===
  weight_management: [
    {
      id: "fiber_complex",
      priority: 9,
      doseStandard: "10-15g par jour",
      doseVegetarian: "10-15g par jour"
    },
    {
      id: "probiotics",
      priority: 7,
      doseStandard: "10-30 milliards UFC par jour",
      doseVegetarian: "10-30 milliards UFC par jour"
    },
    {
      id: "magnesium",
      priority: 6,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 6,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 6,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  blood_sugar_balance: [
    {
      id: "berberine",
      priority: 10,
      doseStandard: "500mg 2-3 fois par jour",
      doseVegetarian: "500mg 2-3 fois par jour"
    },
    {
      id: "chromium",
      priority: 8,
      doseStandard: "200-400mcg par jour",
      doseVegetarian: "200-400mcg par jour"
    },
    {
      id: "fiber_complex",
      priority: 8,
      doseStandard: "5-10g par jour",
      doseVegetarian: "5-10g par jour"
    },
    {
      id: "magnesium",
      priority: 7,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "alpha_lipoic_acid",
      priority: 7,
      doseStandard: "600-1200mg par jour",
      doseVegetarian: "600-1200mg par jour"
    }
  ],

  // === DIGESTION ===
  digestive_health: [
    {
      id: "probiotics",
      priority: 10,
      doseStandard: "20-50 milliards UFC par jour",
      doseVegetarian: "20-50 milliards UFC par jour"
    },
    {
      id: "fiber_complex",
      priority: 9,
      doseStandard: "5-10g par jour",
      doseVegetarian: "5-10g par jour"
    },
    {
      id: "digestive_enzymes",
      priority: 8,
      doseStandard: "1-2 gélules avant les repas principaux",
      doseVegetarian: "1-2 gélules avant les repas principaux"
    },
    {
      id: "l_glutamine",
      priority: 7,
      doseStandard: "5g par jour à jeun",
      doseVegetarian: "5g par jour à jeun"
    },
    {
      id: "ginger",
      priority: 6,
      doseStandard: "500-1000mg d'extrait par jour",
      doseVegetarian: "500-1000mg d'extrait par jour"
    }
  ],

  // === IMMUNITÉ ===
  immune_support: [
    {
      id: "vitamin_d3",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 10,
      doseStandard: "2000-5000 UI par jour",
      doseVegetarian: "2000-5000 UI par jour"
    },
    {
      id: "vitamin_c",
      priority: 9,
      doseStandard: "500-1000mg 1-2 fois par jour",
      doseVegetarian: "500-1000mg 1-2 fois par jour"
    },
    {
      id: "zinc",
      priority: 9,
      doseStandard: "15-30mg par jour",
      doseVegetarian: "15-30mg par jour"
    },
    {
      id: "mushroom_complex",
      priority: 8,
      doseStandard: "1000-3000mg par jour",
      doseVegetarian: "1000-3000mg par jour"
    },
    {
      id: "probiotics",
      priority: 7,
      doseStandard: "10-30 milliards UFC par jour",
      doseVegetarian: "10-30 milliards UFC par jour"
    }
  ],

  // === SANTÉ CARDIO-VASCULAIRE ===
  heart_health: [
    {
      id: "omega3",
      priority: 10,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 10,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "coq10",
      priority: 9,
      doseStandard: "100-300mg par jour",
      doseVegetarian: "100-300mg par jour"
    },
    {
      id: "magnesium",
      priority: 8,
      doseStandard: "300-400mg par jour",
      doseVegetarian: "300-400mg par jour"
    },
    {
      id: "garlic_extract",
      priority: 7,
      doseStandard: "600-1200mg d'extrait par jour",
      doseVegetarian: "600-1200mg d'extrait par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000000 UI par jour"
    }
  ],

  // === ANTIOXYDANT ET LONGÉVITÉ ===
  longevity: [
    {
      id: "nac",
      priority: 9,
      doseStandard: "600-1200mg par jour",
      doseVegetarian: "600-1200mg par jour"
    },
    {
      id: "coq10",
      priority: 9,
      doseStandard: "100-300mg (ubiquinol) par jour",
      doseVegetarian: "100-300mg (ubiquinol) par jour"
    },
    {
      id: "resveratrol",
      priority: 8,
      doseStandard: "100-500mg par jour",
      doseVegetarian: "100-500mg par jour"
    },
    {
      id: "curcumin",
      priority: 8,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "omega3",
      priority: 7,
      doseStandard: "1000-2000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 7,
      doseStandard: "2000-3000mg par jour",
      doseVegetarian: "2000-3000mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ],

  // === ANTI-INFLAMMATOIRE ===
  reduce_inflammation: [
    {
      id: "curcumin",
      priority: 10,
      doseStandard: "500-1000mg (forme bioactive) par jour",
      doseVegetarian: "500-1000mg (forme bioactive) par jour"
    },
    {
      id: "omega3",
      priority: 9,
      doseStandard: "2000-3000mg d'EPA+DHA par jour",
      doseVegetarian: null
    },
    {
      id: "omega3_vegan",
      priority: 9,
      doseStandard: "3000-4000mg par jour",
      doseVegetarian: "3000-4000mg par jour"
    },
    {
      id: "boswellia",
      priority: 8,
      doseStandard: "300-500mg d'extrait standardisé 2-3 fois par jour",
      doseVegetarian: "300-500mg d'extrait standardisé 2-3 fois par jour"
    },
    {
      id: "quercetin",
      priority: 7,
      doseStandard: "500-1000mg par jour",
      doseVegetarian: "500-1000mg par jour"
    },
    {
      id: "vitamin_d3",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: null
    },
    {
      id: "vitamin_d3_vegan",
      priority: 7,
      doseStandard: "2000-4000 UI par jour",
      doseVegetarian: "2000-4000 UI par jour"
    }
  ]
};

// Seuils d'intensité pour les objectifs
export const GOAL_INTENSITY: SymptomIntensityThresholds = {
  mild: 3,
  moderate: 6,
  severe: 8
};

// Mappings entre symptômes et recommandations de suppléments
export const SYMPTOM_RECOMMENDATIONS_DETAILED: Record<string, SymptomRecommendation[]> = {
  // STRESS ET ANXIÉTÉ
  "stress_constant": [
    { id: "ashwagandha", priority: 10 },
    { id: "rhodiola", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "holy_basil", priority: 7 }
  ],
  "anxiete": [
    { id: "l_theanine", priority: 10 },
    { id: "magnesium_glycinate", priority: 9 },
    { id: "ashwagandha", priority: 8 },
    { id: "holy_basil", priority: 7 },
    { id: "rhodiola", priority: 6 }
  ],
  "irritabilite": [
    { id: "magnesium_glycinate", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "holy_basil", priority: 7 },
    { id: "ashwagandha", priority: 7 },
    { id: "vitamin_b_complex", priority: 6 }
  ],
  "tension_musculaire": [
    { id: "magnesium_glycinate", priority: 10 },
    { id: "msm", priority: 8 },
    { id: "curcumin", priority: 7 },
    { id: "ashwagandha", priority: 6 },
    { id: "boswellia", priority: 6 }
  ],

  // FATIGUE ET ÉNERGIE
  "fatigue_generale": [
    { id: "vitamin_b_complex", priority: 10 },
    { id: "iron", priority: 9 },
    { id: "rhodiola", priority: 8 },
    { id: "coq10", priority: 7 },
    { id: "cordyceps", priority: 6 }
  ],
  "fatigue_matinale": [
    { id: "rhodiola", priority: 9 },
    { id: "vitamin_b_complex", priority: 8 },
    { id: "iron", priority: 7 },
    { id: "cordyceps", priority: 7 },
    { id: "maca", priority: 6 }
  ],
  "fatigue_apres_midi": [
    { id: "rhodiola", priority: 9 },
    { id: "vitamin_b_complex", priority: 8 },
    { id: "magnesium_glycinate", priority: 7 },
    { id: "iron", priority: 6 },
    { id: "coq10", priority: 6 }
  ],
  "baisse_motivation": [
    { id: "rhodiola", priority: 9 },
    { id: "maca", priority: 8 },
    { id: "vitamin_b_complex", priority: 7 },
    { id: "vitamin_d3", priority: 7 },
    { id: "vitamin_d3_vegan", priority: 7 }
  ],
  "anemic": [
    { id: "iron", priority: 10 },
    { id: "vitamin_b_complex", priority: 9 },
    { id: "vitamin_c", priority: 8 },
    { id: "coq10", priority: 7 },
    { id: "cordyceps", priority: 6 }
  ],

  // PROBLÈMES DE SOMMEIL
  "difficulte_endormissement": [
    { id: "melatonin", priority: 10 },
    { id: "l_theanine", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "valerian", priority: 8 },
    { id: "glycine", priority: 7 }
  ],
  "reveils_nocturnes": [
    { id: "magnesium_glycinate", priority: 9 },
    { id: "glycine", priority: 8 },
    { id: "l_theanine", priority: 7 },
    { id: "tart_cherry", priority: 7 },
    { id: "valerian", priority: 6 }
  ],
  "sommeil_non_reparateur": [
    { id: "glycine", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "tart_cherry", priority: 7 },
    { id: "melatonin", priority: 6 },
    { id: "valerian", priority: 6 }
  ],
  "decalage_horaire": [
    { id: "melatonin", priority: 10 },
    { id: "l_theanine", priority: 8 },
    { id: "magnesium_glycinate", priority: 7 },
    { id: "tart_cherry", priority: 6 },
    { id: "vitamin_b_complex", priority: 5 }
  ],

  // PROBLÈMES DIGESTIFS
  "ballonnements": [
    { id: "digestive_enzymes", priority: 10 },
    { id: "probiotics", priority: 9 },
    { id: "fiber_complex", priority: 8 },
    { id: "ginger", priority: 7 },
    { id: "peppermint", priority: 7 }
  ],
  "constipation": [
    { id: "fiber_complex", priority: 10 },
    { id: "magnesium_glycinate", priority: 9 },
    { id: "probiotics", priority: 8 },
    { id: "digestive_enzymes", priority: 6 },
    { id: "slippery_elm", priority: 6 }
  ],
  "diarrhee": [
    { id: "probiotics", priority: 9 },
    { id: "slippery_elm", priority: 8 },
    { id: "fiber_complex", priority: 7 },
    { id: "l_glutamine", priority: 7 },
    { id: "zinc", priority: 6 }
  ],
  "brulures_estomac": [
    { id: "slippery_elm", priority: 9 },
    { id: "dgl_licorice", priority: 8 },
    { id: "probiotics", priority: 7 },
    { id: "d_limonene", priority: 7 },
    { id: "zinc_carnosine", priority: 7 }
  ],
  "intolerance_alimentaire": [
    { id: "digestive_enzymes", priority: 9 },
    { id: "probiotics", priority: 8 },
    { id: "l_glutamine", priority: 7 },
    { id: "quercetin", priority: 7 },
    { id: "slippery_elm", priority: 6 }
  ],

  // PROBLÈMES COGNITIFS
  "difficulte_concentration": [
    { id: "bacopa", priority: 9 },
    { id: "omega3", priority: 9 },
    { id: "omega3_vegan", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "ginkgo", priority: 7 },
    { id: "lions_mane", priority: 7 }
  ],
  "memoire_declin": [
    { id: "bacopa", priority: 10 },
    { id: "lions_mane", priority: 9 },
    { id: "ginkgo", priority: 8 },
    { id: "omega3", priority: 8 },
    { id: "omega3_vegan", priority: 8 },
    { id: "phosphatidylserine", priority: 7 }
  ],
  "brouillard_mental": [
    { id: "lions_mane", priority: 9 },
    { id: "omega3", priority: 8 },
    { id: "omega3_vegan", priority: 8 },
    { id: "vitamin_b_complex", priority: 8 },
    { id: "bacopa", priority: 7 },
    { id: "ginkgo", priority: 7 }
  ],
  "humeur_basse": [
    { id: "vitamin_d3", priority: 9 },
    { id: "vitamin_d3_vegan", priority: 9 },
    { id: "omega3", priority: 8 },
    { id: "omega3_vegan", priority: 8 },
    { id: "saffron", priority: 8 },
    { id: "rhodiola", priority: 7 },
    { id: "vitamin_b_complex", priority: 7 }
  ],

  // PROBLÈMES INFLAMMATOIRES
  "douleurs_articulaires": [
    { id: "curcumin", priority: 10 },
    { id: "boswellia", priority: 9 },
    { id: "msm", priority: 8 },
    { id: "omega3", priority: 8 },
    { id: "omega3_vegan", priority: 8 },
    { id: "collagen", priority: 7 }
  ],
  "douleurs_musculaires": [
    { id: "magnesium_glycinate", priority: 9 },
    { id: "curcumin", priority: 8 },
    { id: "msm", priority: 7 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "tart_cherry", priority: 6 }
  ],
  "problemes_peau": [
    { id: "omega3", priority: 9 },
    { id: "omega3_vegan", priority: 9 },
    { id: "omega_complex", priority: 8 },
    { id: "zinc", priority: 8 },
    { id: "vitamin_d3", priority: 7 },
    { id: "vitamin_d3_vegan", priority: 7 },
    { id: "probiotics", priority: 7 }
  ],
  "allergies": [
    { id: "quercetin", priority: 9 },
    { id: "vitamin_c", priority: 8 },
    { id: "probiotics", priority: 8 },
    { id: "msm", priority: 7 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 }
  ]
};

// Mappings entre objectifs et recommandations de suppléments
export const GOAL_RECOMMENDATIONS_DETAILED: Record<string, GoalRecommendation[]> = {
  // ÉNERGIE ET VITALITÉ
  "plus_energie": [
    { id: "vitamin_b_complex", priority: 10 },
    { id: "rhodiola", priority: 9 },
    { id: "cordyceps", priority: 8 },
    { id: "coq10", priority: 8 },
    { id: "iron", priority: 7 },
    { id: "maca", priority: 7 }
  ],
  "ameliorer_endurance": [
    { id: "cordyceps", priority: 9 },
    { id: "coq10", priority: 8 },
    { id: "rhodiola", priority: 8 },
    { id: "iron", priority: 7 },
    { id: "vitamin_b_complex", priority: 7 },
    { id: "maca", priority: 6 }
  ],
  "reduire_fatigue": [
    { id: "iron", priority: 9 },
    { id: "vitamin_b_complex", priority: 9 },
    { id: "rhodiola", priority: 8 },
    { id: "coq10", priority: 7 },
    { id: "ashwagandha", priority: 6 },
    { id: "cordyceps", priority: 6 }
  ],

  // STRESS ET RELAXATION
  "reduire_stress": [
    { id: "ashwagandha", priority: 10 },
    { id: "l_theanine", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "rhodiola", priority: 8 },
    { id: "holy_basil", priority: 7 }
  ],
  "ameliorer_humeur": [
    { id: "vitamin_d3", priority: 9 },
    { id: "vitamin_d3_vegan", priority: 9 },
    { id: "saffron", priority: 8 },
    { id: "rhodiola", priority: 8 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "vitamin_b_complex", priority: 7 }
  ],
  "plus_resilience": [
    { id: "rhodiola", priority: 9 },
    { id: "ashwagandha", priority: 8 },
    { id: "holy_basil", priority: 7 },
    { id: "cordyceps", priority: 7 },
    { id: "mushroom_complex", priority: 6 },
    { id: "vitamin_b_complex", priority: 6 }
  ],

  // SOMMEIL
  "mieux_dormir": [
    { id: "melatonin", priority: 9 },
    { id: "magnesium_glycinate", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "glycine", priority: 8 },
    { id: "valerian", priority: 7 },
    { id: "tart_cherry", priority: 7 }
  ],
  "endormissement_rapide": [
    { id: "melatonin", priority: 10 },
    { id: "l_theanine", priority: 8 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "valerian", priority: 7 },
    { id: "glycine", priority: 6 }
  ],
  "sommeil_profond": [
    { id: "glycine", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "tart_cherry", priority: 7 },
    { id: "melatonin", priority: 6 },
    { id: "valerian", priority: 6 }
  ],

  // COGNITION ET CONCENTRATION
  "ameliorer_concentration": [
    { id: "bacopa", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "lions_mane", priority: 8 },
    { id: "ginkgo", priority: 7 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "rhodiola", priority: 6 }
  ],
  "renforcer_memoire": [
    { id: "bacopa", priority: 10 },
    { id: "lions_mane", priority: 8 },
    { id: "ginkgo", priority: 8 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "phosphatidylserine", priority: 7 }
  ],
  "lucidite_mentale": [
    { id: "lions_mane", priority: 9 },
    { id: "bacopa", priority: 8 },
    { id: "rhodiola", priority: 8 },
    { id: "ginkgo", priority: 7 },
    { id: "l_theanine", priority: 7 },
    { id: "omega3", priority: 6 },
    { id: "omega3_vegan", priority: 6 }
  ],

  // DIGESTION ET MÉTABOLISME
  "ameliorer_digestion": [
    { id: "digestive_enzymes", priority: 10 },
    { id: "probiotics", priority: 9 },
    { id: "fiber_complex", priority: 8 },
    { id: "ginger", priority: 7 },
    { id: "slippery_elm", priority: 6 }
  ],
  "equilibre_intestinal": [
    { id: "probiotics", priority: 10 },
    { id: "fiber_complex", priority: 8 },
    { id: "l_glutamine", priority: 7 },
    { id: "slippery_elm", priority: 6 },
    { id: "zinc", priority: 6 }
  ],
  "soutien_detox": [
    { id: "milk_thistle", priority: 9 },
    { id: "fiber_complex", priority: 8 },
    { id: "n_acetyl_cysteine", priority: 8 },
    { id: "chlorella", priority: 7 },
    { id: "dandelion", priority: 7 }
  ],

  // IMMUNITÉ
  "renforcer_immunite": [
    { id: "vitamin_d3", priority: 10 },
    { id: "vitamin_d3_vegan", priority: 10 },
    { id: "vitamin_c", priority: 9 },
    { id: "zinc", priority: 8 },
    { id: "mushroom_complex", priority: 8 },
    { id: "probiotics", priority: 7 }
  ],
  "recuperation_rapide": [
    { id: "vitamin_c", priority: 9 },
    { id: "zinc", priority: 8 },
    { id: "vitamin_d3", priority: 8 },
    { id: "vitamin_d3_vegan", priority: 8 },
    { id: "mushroom_complex", priority: 7 },
    { id: "elderberry", priority: 7 }
  ],
  "anti_inflammatoire": [
    { id: "curcumin", priority: 10 },
    { id: "omega3", priority: 9 },
    { id: "omega3_vegan", priority: 9 },
    { id: "boswellia", priority: 8 },
    { id: "msm", priority: 7 },
    { id: "tart_cherry", priority: 6 }
  ]
};

// Mappings entre mode de vie et recommandations de suppléments
export const LIFESTYLE_RECOMMENDATIONS: Record<string, LifestyleRecommendation[]> = {
  // RÉGIMES ALIMENTAIRES
  "vegan": [
    { id: "vitamin_b12", priority: 10 },
    { id: "vitamin_d3_vegan", priority: 9 },
    { id: "omega3_vegan", priority: 9 },
    { id: "iron", priority: 8 },
    { id: "zinc", priority: 7 },
    { id: "calcium_magnesium", priority: 7 }
  ],
  "vegetarien": [
    { id: "vitamin_b12", priority: 8 },
    { id: "vitamin_d3", priority: 7 },
    { id: "vitamin_d3_vegan", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "iron", priority: 6 },
    { id: "zinc", priority: 6 }
  ],
  "sans_gluten": [
    { id: "digestive_enzymes", priority: 8 },
    { id: "probiotics", priority: 8 },
    { id: "l_glutamine", priority: 7 },
    { id: "zinc", priority: 6 },
    { id: "multivitamin", priority: 6 }
  ],
  "sans_lactose": [
    { id: "calcium_magnesium", priority: 8 },
    { id: "vitamin_d3", priority: 7 },
    { id: "vitamin_d3_vegan", priority: 7 },
    { id: "probiotics", priority: 7 },
    { id: "digestive_enzymes", priority: 6 }
  ],
  "ceto": [
    { id: "magnesium_glycinate", priority: 9 },
    { id: "potassium", priority: 8 },
    { id: "mct_oil", priority: 8 },
    { id: "digestive_enzymes", priority: 7 },
    { id: "vitamin_d3", priority: 6 },
    { id: "vitamin_d3_vegan", priority: 6 }
  ],

  // ACTIVITÉ PHYSIQUE
  "sport_intensif": [
    { id: "whey_protein", priority: 9 },
    { id: "bcaa", priority: 8 },
    { id: "creatine", priority: 8 },
    { id: "magnesium_glycinate", priority: 7 },
    { id: "coq10", priority: 7 },
    { id: "vitamin_d3", priority: 6 },
    { id: "vitamin_d3_vegan", priority: 6 }
  ],
  "sport_endurance": [
    { id: "iron", priority: 9 },
    { id: "cordyceps", priority: 8 },
    { id: "coq10", priority: 8 },
    { id: "magnesium_glycinate", priority: 7 },
    { id: "electrolytes", priority: 7 },
    { id: "rhodiola", priority: 6 }
  ],
  "yoga_meditation": [
    { id: "magnesium_glycinate", priority: 8 },
    { id: "l_theanine", priority: 8 },
    { id: "rhodiola", priority: 7 },
    { id: "holy_basil", priority: 7 },
    { id: "ashwagandha", priority: 7 },
    { id: "vitamin_b_complex", priority: 6 }
  ],
  "sedentaire": [
    { id: "vitamin_d3", priority: 9 },
    { id: "vitamin_d3_vegan", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "coq10", priority: 7 },
    { id: "omega3", priority: 7 },
    { id: "omega3_vegan", priority: 7 },
    { id: "vitamin_b_complex", priority: 6 }
  ],

  // MODE DE VIE
  "travail_nuit": [
    { id: "melatonin", priority: 10 },
    { id: "vitamin_d3", priority: 9 },
    { id: "vitamin_d3_vegan", priority: 9 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "vitamin_b_complex", priority: 7 },
    { id: "rhodiola", priority: 7 }
  ],
  "voyages_frequents": [
    { id: "melatonin", priority: 10 },
    { id: "probiotics", priority: 8 },
    { id: "vitamin_c", priority: 8 },
    { id: "rhodiola", priority: 7 },
    { id: "magnesium_glycinate", priority: 7 },
    { id: "zinc", priority: 6 }
  ],
  "travail_stress": [
    { id: "ashwagandha", priority: 9 },
    { id: "rhodiola", priority: 9 },
    { id: "l_theanine", priority: 8 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "vitamin_b_complex", priority: 7 },
    { id: "holy_basil", priority: 7 }
  ],
  "parent_jeunes_enfants": [
    { id: "vitamin_b_complex", priority: 9 },
    { id: "ashwagandha", priority: 8 },
    { id: "magnesium_glycinate", priority: 8 },
    { id: "rhodiola", priority: 7 },
    { id: "vitamin_c", priority: 7 },
    { id: "zinc", priority: 6 }
  ]
};

// Facteurs d'âge pour ajuster les recommandations
export const AGE_FACTORS: Record<string, Record<string, number>> = {
  "18-30": {
    "vitamin_d3": 0.8,
    "vitamin_d3_vegan": 0.8,
    "coq10": 0.7,
    "iron": 1.2,
    "bacopa": 0.9,
    "maca": 1.1
  },
  "31-45": {
    "coq10": 0.9,
    "vitamin_b_complex": 1.1,
    "magnesium_glycinate": 1.1,
    "rhodiola": 1.1,
    "ashwagandha": 1.1
  },
  "46-60": {
    "coq10": 1.2,
    "vitamin_d3": 1.2,
    "vitamin_d3_vegan": 1.2,
    "bacopa": 1.2,
    "lions_mane": 1.3,
    "magnesium_glycinate": 1.2,
    "omega3": 1.2,
    "omega3_vegan": 1.2
  },
  "60+": {
    "coq10": 1.3,
    "vitamin_d3": 1.3,
    "vitamin_d3_vegan": 1.3,
    "vitamin_b_complex": 1.2,
    "bacopa": 1.3,
    "lions_mane": 1.3,
    "magnesium_glycinate": 1.3,
    "omega3": 1.3,
    "omega3_vegan": 1.3,
    "curcumin": 1.3,
    "probiotics": 1.2
  }
};

// Facteurs de sexe pour ajuster les recommandations
export const GENDER_FACTORS: Record<string, Record<string, number>> = {
  "femme": {
    "iron": 1.3,
    "calcium_magnesium": 1.2,
    "vitamin_d3": 1.1,
    "vitamin_d3_vegan": 1.1,
    "probiotics": 1.1,
    "maca": 1.1,
    "evening_primrose": 1.3
  },
  "homme": {
    "zinc": 1.2,
    "magnesium_glycinate": 1.1,
    "vitamin_d3": 1.1,
    "vitamin_d3_vegan": 1.1,
    "saw_palmetto": 1.3,
    "maca": 1.1
  },
  "non_binaire": {
    "vitamin_d3": 1.1,
    "vitamin_d3_vegan": 1.1,
    "vitamin_b_complex": 1.1,
    "magnesium_glycinate": 1.1
  }
};

// Facteurs de priorité pour les symptômes (certains sont plus prioritaires que d'autres)
export const SYMPTOM_PRIORITY_FACTORS: Record<string, number> = {
  "stress_constant": 1.5,       // Priorité élevée - Stress
  "anxiete": 1.4,               // Priorité élevée - Anxiété
  "fatigue_generale": 1.4,      // Priorité élevée - Fatigue
  "anemic": 1.5,                // Priorité élevée - Condition médicale
  "difficulte_endormissement": 1.3, // Priorité élevée - Sommeil
  "reveils_nocturnes": 1.2,     // Priorité moyenne - Sommeil
  "memoire_declin": 1.2,        // Priorité moyenne - Cognition
  "difficulte_concentration": 1.2, // Priorité moyenne - Cognition
  "douleurs_articulaires": 1.3, // Priorité élevée - Douleur
  "problemes_peau": 1.1,        // Priorité moyenne-basse - Peau
  "ballonnements": 1.1,         // Priorité moyenne-basse - Digestion
  "constipation": 1.2,          // Priorité moyenne - Digestion
  "diarrhee": 1.3,              // Priorité élevée - Digestion urgente
  "brulures_estomac": 1.2,      // Priorité moyenne - Digestion
  "humeur_basse": 1.3,          // Priorité élevée - Santé mentale
  "brouillard_mental": 1.2,     // Priorité moyenne - Cognition
  "allergies": 1.2              // Priorité moyenne - Allergie
};

export default { SYMPTOM_CATEGORIES, SYMPTOM_RECOMMENDATIONS, GOAL_RECOMMENDATIONS, LIFESTYLE_RECOMMENDATIONS, SYMPTOM_INTENSITY, GOAL_INTENSITY, AGE_FACTORS, GENDER_FACTORS, SYMPTOM_PRIORITY_FACTORS };