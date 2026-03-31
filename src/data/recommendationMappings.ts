
/**
 * Mappages entre symptômes, objectifs et suppléments recommandés
 * Ce fichier définit les relations entre les problèmes de santé et les solutions nutritionnelles
 */

// Mappages des symptômes vers les catégories
export const SYMPTOM_CATEGORIES = {
  "Fatigue": ["energy", "nutrition"],
  "Sleep problems": ["sleep", "relaxation"],
  "Stress": ["stress", "relaxation", "mood"],
  "Anxiety": ["mood", "relaxation"],
  "Digestive problems": ["digestion", "gut-health"],
  "Joint pain": ["joints", "anti-inflammatory"],
  "Skin problems": ["skin", "antioxidant"],
  "Brittle hair": ["hair", "nutrition"],
  "Weak immune system": ["immune", "antioxidant"],
  "Concentration problems": ["brain", "cognitive"],
  "Hormonal problems": ["hormonal", "balance"]
};

// Mappages des symptômes vers les suppléments recommandés
export const SYMPTOM_RECOMMENDATIONS = {
  "Fatigue": ["vitamin_b_complex", "iron", "coq10", "vitamin_c", "vitamin_d3"],
  "Sleep problems": ["magnesium_glycinate", "melatonin", "l_theanine", "ashwagandha"],
  "Stress": ["ashwagandha", "l_theanine", "magnesium_glycinate", "rhodiola"],
  "Anxiety": ["ashwagandha", "l_theanine", "magnesium_glycinate", "rhodiola"],
  "Digestive problems": ["probiotics", "magnesium_glycinate", "anti-inflammatory-diet"],
  "Joint pain": ["curcumin", "omega3", "vitamin_d3"],
  "Skin problems": ["vitamin_c", "omega3", "zinc", "probiotics"],
  "Brittle hair": ["vitamin_b_complex", "zinc", "iron"],
  "Weak immune system": ["vitamin_c", "vitamin_d3", "zinc", "probiotics"],
  "Concentration problems": ["omega3", "vitamin_b_complex", "l_theanine", "lions_mane", "alpha_gpc"],
  "Hormonal problems": ["vitamin_d3", "magnesium_glycinate", "omega3", "ashwagandha"]
};

// Mappages des objectifs vers les suppléments recommandés
export const GOAL_RECOMMENDATIONS = {
  "Better sleep": ["magnesium_glycinate", "melatonin", "l_theanine", "circadian-rhythm-optimization"],
  "Reduce my stress": ["ashwagandha", "rhodiola", "l_theanine", "mindfulness-meditation"],
  "More energy": ["vitamin_b_complex", "iron", "coq10", "vitamin_c"],
  "Strengthen my immunity": ["vitamin_c", "vitamin_d3", "zinc", "probiotics"],
  "Support my digestion": ["probiotics", "anti-inflammatory-diet", "magnesium_glycinate"],
  "Improve my concentration": ["omega3", "vitamin_b_complex", "l_theanine", "lions_mane", "alpha_gpc"],
  "Balancing my hormones": ["vitamin_d3", "magnesium_glycinate", "omega3", "ashwagandha"],
  "Improve my skin": ["vitamin_c", "omega3", "zinc", "anti-inflammatory-diet"],
  "Balance my weight": ["intermittent-fasting", "berberine", "magnesium_glycinate", "nutrient-timing"],
  "Optimize my overall health": ["micronutrient-assessment", "vitamin_d3", "magnesium_glycinate", "omega3-supplementation", "probiotics"]
};

// Mappages des habitudes de vie vers les suppléments recommandés
export const LIFESTYLE_RECOMMENDATIONS = {
  "Sedentary": ["vitamin_d3", "magnesium_glycinate", "vitamin_b_complex"],
  "Actif": ["magnesium_glycinate", "vitamin_c", "coq10"],
  "Very active": ["magnesium_glycinate", "vitamin_b_complex", "vitamin_c", "zinc", "coq10"],
  "Vegetarian diet": ["vitamin_b12", "iron", "vitamin_d3", "omega3"],
  "Vegan food": ["vitamin_b12", "vitamin_d3", "iron", "omega3_vegan", "zinc"],
  "Chronic stress": ["ashwagandha", "rhodiola", "magnesium_glycinate", "vitamin_b_complex"],
  "Sleep problems": ["magnesium_glycinate", "melatonin", "l_theanine"]
};

// Facteurs d'âge pour l'ajustement des recommandations
export const AGE_FACTORS = {
  "18-30": {
    "vitamin_d3": 0.8,
    "vitamin_b_complex": 0.9,
    "magnesium_glycinate": 0.9,
    "probiotics": 1.0,
    "ashwagandha": 1.1
  },
  "31-45": {
    "vitamin_d3": 1.0,
    "vitamin_b_complex": 1.0,
    "magnesium_glycinate": 1.0,
    "coq10": 1.1,
    "probiotics": 1.0
  },
  "46-60": {
    "vitamin_d3": 1.2,
    "vitamin_b_complex": 1.1,
    "magnesium_glycinate": 1.1,
    "coq10": 1.2,
    "omega3": 1.2
  },
  "60+": {
    "vitamin_d3": 1.3,
    "vitamin_b_complex": 1.2,
    "magnesium_glycinate": 1.2,
    "coq10": 1.3,
    "omega3": 1.3
  }
};

// Facteurs de genre pour l'ajustement des recommandations
export const GENDER_FACTORS = {
  "Homme": {
    "zinc": 1.1,
    "vitamin_b_complex": 1.0,
    "magnesium_glycinate": 1.1
  },
  "Femme": {
    "iron": 1.2,
    "vitamin_d3": 1.1,
    "calcium": 1.1
  }
};

// Facteurs de priorité des symptômes
export const SYMPTOM_PRIORITY_FACTORS = {
  "Fatigue": 1.2,
  "Sleep problems": 1.2,
  "Stress": 1.1,
  "Anxiety": 1.1,
  "Digestive problems": 1.0,
  "Joint pain": 1.0,
  "Skin problems": 0.9,
  "Brittle hair": 0.9,
  "Weak immune system": 1.1
};
