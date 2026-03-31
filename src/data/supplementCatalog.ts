
/**
 * Catalogue des compléments alimentaires naturels
 * Ce fichier contient les données sur les compléments, leurs propriétés et bénéfices
 */

// Interface pour définir la structure d'un complément alimentaire
export interface SupplementInfo {
  name: string;
  description: string;
  category: string;
  benefits: string[];
  scientificBasis: string;
  recommendedDosage: string;
  timeToEffect: string;
  naturalSources: string[];
  efficacyScore: number;
  cautions?: string;
  compatibleDiets: string[];
  targetSymptoms: string[];
  targetGoals: string[];
  categories: string[];
  relatedTerms: string[];
}

// Catalogue des compléments alimentaires
const SUPPLEMENT_CATALOG: Record<string, SupplementInfo> = {
  "magnesium_glycinate": {
    name: "Marine magnesium",
    description: "Helps reduce fatigue and support the nervous and muscular system",
    category: "Minerals",
    benefits: [
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Helps maintain normal muscle functions",
      "Contributes to electrolyte balance"
    ],
    scientificBasis: "Clinical studies show that magnesium plays a crucial role in more than 300 enzymatic reactions in the body",
    recommendedDosage: "300-400 mg per day",
    timeToEffect: "2-3 weeks",
    naturalSources: ["Nuts", "Green vegetables", "Whole grains", "Dark chocolate"],
    efficacyScore: 90,
    cautions: "May have a laxative effect at high doses",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Stress", "Anxiety", "Sleep problems", "Joint pain"],
    targetGoals: ["More energy", "Reduce my stress", "Better sleep"],
    categories: ["minerals", "sleep", "stress", "energy"],
    relatedTerms: ["magnesium", "electrolytes", "muscle function"]
  },
  
  "vitamin_b_complex": {
    name: "Vitamin B Complex",
    description: "Supports energy metabolism and helps reduce fatigue",
    category: "Vitamines",
    benefits: [
      "Contributes to normal energy metabolism",
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Contributes to normal psychological functions"
    ],
    scientificBasis: "B vitamins are essential for converting nutrients into energy at the cellular level",
    recommendedDosage: "Depending on individual needs, usually 1 tablet per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Whole grains", "Legumes", "Nutritional yeast", "Viandes", "Eggs"],
    efficacyScore: 85,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian"],
    targetSymptoms: ["Fatigue", "Lack of concentration", "Stress", "Anxiety"],
    targetGoals: ["More energy", "Improve my concentration", "Reduce my stress"],
    categories: ["vitamins", "energy", "cognitive"],
    relatedTerms: ["metabolism", "b vitamins", "energy"]
  },
  
  "vitamin_b12": {
    name: "Natural vitamin B12",
    description: "Essential for energy, the nervous system and the formation of red blood cells",
    category: "Vitamines",
    benefits: [
      "Contributes to normal energy metabolism",
      "Helps reduce fatigue",
      "Supports normal functioning of the nervous system",
      "Contributes to the normal formation of red blood cells"
    ],
    scientificBasis: "Vitamin B12 is necessary for DNA synthesis, formation of red blood cells and maintenance of the myelin sheath",
    recommendedDosage: "1000-2000 μg per week or 250 μg per day",
    timeToEffect: "4-12 weeks",
    naturalSources: ["Viandes", "Poissons", "Seafood", "Eggs", "Dairy products", "Enriched nutritional yeast"],
    efficacyScore: 95,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Lack of concentration", "Sensitivity to cold"],
    targetGoals: ["More energy", "Improve my concentration"],
    categories: ["vitamins", "energy", "vegan-essential"],
    relatedTerms: ["cobalamin", "methylcobalamin", "red blood cells"]
  },
  
  "vitamin_d3": {
    name: "Natural vitamin D3",
    description: "Supports the immune system and contributes to bone health",
    category: "Vitamines",
    benefits: [
      "Contributes to the maintenance of normal bones",
      "Supports the immune system",
      "Helps with calcium absorption",
      "Helps maintain normal muscle function"
    ],
    scientificBasis: "Studies show that vitamin D supplementation can reduce the risk of respiratory infections by 30% in deficient people",
    recommendedDosage: "1000-2000 IU per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Sun exposure", "Oily fish", "Egg yolk"],
    efficacyScore: 85,
    cautions: "Consult a professional for high dosages",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien"],
    targetSymptoms: ["Fatigue", "Sensitivity to cold", "Joint pain"],
    targetGoals: ["More energy", "Strengthen my immunity"],
    categories: ["vitamins", "immune", "bone-health"],
    relatedTerms: ["sunshine vitamin", "calcium absorption", "cholecalciferol"]
  },
  
  "vitamin_d_vegan": {
    name: "Vitamin D3 of plant origin",
    description: "Vegan version of vitamin D, extracted from lichen, supports immunity and bone health",
    category: "Vitamines",
    benefits: [
      "Contributes to the maintenance of normal bones",
      "Supports the immune system",
      "Helps with calcium absorption",
      "Helps maintain normal muscle function"
    ],
    scientificBasis: "Vitamin D3 of plant origin (lichen) has shown bioavailability comparable to that of animal origin",
    recommendedDosage: "1000-2000 IU per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Sun exposure", "Lichen"],
    efficacyScore: 80,
    cautions: "Consult a professional for high dosages",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Sensitivity to cold", "Joint pain"],
    targetGoals: ["More energy", "Strengthen my immunity"],
    categories: ["vitamins", "immune", "bone-health", "vegan-friendly"],
    relatedTerms: ["lichen-derived", "plant-based", "cholecalciferol"]
  },
  
  "vitamin_c": {
    name: "Natural vitamin C",
    description: "Powerful antioxidant that supports the immune system and collagen production",
    category: "Vitamines",
    benefits: [
      "Helps reduce fatigue",
      "Supports the immune system",
      "Helps protect cells against oxidative stress",
      "Improves iron absorption"
    ],
    scientificBasis: "Vitamin C is essential for collagen synthesis and acts as a powerful antioxidant in the body",
    recommendedDosage: "500-1000 mg per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Agrumes", "Kiwi", "Baies", "Poivrons", "Brocoli"],
    efficacyScore: 80,
    cautions: "May cause digestive problems in high doses",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Skin problems"],
    targetGoals: ["More energy", "Strengthen my immunity", "Improve my skin"],
    categories: ["vitamins", "immune", "skin-health", "antioxidant"],
    relatedTerms: ["ascorbic acid", "collagen", "antioxidant"]
  },
  
  "zinc": {
    name: "Natural zinc",
    description: "Essential mineral for immunity, skin health and cognitive function",
    category: "Minerals",
    benefits: [
      "Supports the immune system",
      "Contributes to the maintenance of normal skin",
      "Helps protect cells against oxidative stress",
      "Contributes to the maintenance of normal cognitive function"
    ],
    scientificBasis: "Zinc is involved in more than 300 enzymatic reactions and plays a crucial role in cell division and tissue repair",
    recommendedDosage: "15-30 mg per day",
    timeToEffect: "4-6 weeks",
    naturalSources: ["Oysters", "Red meat", "Pumpkin seeds", "Legumes"],
    efficacyScore: 75,
    cautions: "High doses may interfere with copper absorption",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Skin problems", "Fragile hair/nails"],
    targetGoals: ["Strengthen my immunity", "Improve my skin"],
    categories: ["minerals", "immune", "skin-health"],
    relatedTerms: ["trace mineral", "immunity", "enzyme cofactor"]
  },
  
  "iron": {
    name: "Natural iron",
    description: "Essential mineral for oxygen transport and energy production",
    category: "Minerals",
    benefits: [
      "Helps reduce fatigue",
      "Helps with the normal formation of red blood cells",
      "Supports normal oxygen transport in the body",
      "Contributes to normal cognitive function"
    ],
    scientificBasis: "Iron is an essential component of hemoglobin, responsible for transporting oxygen from the lungs to tissues",
    recommendedDosage: "14-18 mg per day (women), 8-10 mg per day (men)",
    timeToEffect: "4-12 weeks",
    naturalSources: ["Red meat", "Legumes", "Spinach", "Pumpkin seeds"],
    efficacyScore: 85,
    cautions: "May cause digestive disorders, do not take without proven deficiency",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Sensitivity to cold"],
    targetGoals: ["More energy"],
    categories: ["minerals", "energy", "blood-health"],
    relatedTerms: ["hemoglobin", "ferritin", "anemia"]
  },
  
  "omega3": {
    name: "Omega-3 (EPA/DHA)",
    description: "Essential fatty acids for cardiovascular and brain health",
    category: "Essential fatty acids",
    benefits: [
      "Supports cardiovascular health",
      "Contributes to normal brain functioning",
      "Helps maintain normal vision",
      "Natural anti-inflammatory properties"
    ],
    scientificBasis: "Omega-3s are polyunsaturated fatty acids that modulate inflammation and are structural components of cell membranes",
    recommendedDosage: "1000-2000 mg per day (including 500 mg EPA/DHA)",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Oily fish (salmon, mackerel, sardines)", "Marine algae"],
    efficacyScore: 80,
    cautions: "Consult a doctor if on anticoagulants",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien"],
    targetSymptoms: ["Joint pain", "Lack of concentration", "Mood swings"],
    targetGoals: ["Improve my concentration", "Reduce my stress"],
    categories: ["essential-fatty-acids", "brain-health", "heart-health", "anti-inflammatory"],
    relatedTerms: ["EPA", "DHA", "fish oil"]
  },
  
  "omega3_vegan": {
    name: "Plant-based omega-3 (ALA)",
    description: "Plant version of essential fatty acids, mainly in the form of ALA",
    category: "Essential fatty acids",
    benefits: [
      "Supports cardiovascular health",
      "Helps maintain normal cholesterol levels",
      "Natural anti-inflammatory properties"
    ],
    scientificBasis: "ALA (alpha-linolenic acid) can be partially converted to EPA and DHA in the body, but with a limited conversion rate",
    recommendedDosage: "2000-4000 mg per day",
    timeToEffect: "8-12 weeks",
    naturalSources: ["Flax seeds", "Chia seeds", "Noix", "Rapeseed oil"],
    efficacyScore: 65,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Joint pain", "Mood swings"],
    targetGoals: ["Reduce my stress"],
    categories: ["essential-fatty-acids", "heart-health", "vegan-friendly"],
    relatedTerms: ["ALA", "flaxseed", "plant-based omega"]
  },
  
  "probiotics": {
    name: "Multi-strain probiotics",
    description: "Beneficial bacteria that support the balance of intestinal flora",
    category: "Probiotiques",
    benefits: [
      "Supports the balance of intestinal flora",
      "Helps maintain healthy digestion",
      "Contributes to strengthening the immune system",
      "May improve the appearance of the skin"
    ],
    scientificBasis: "Probiotics modulate the intestinal microbiome and positively influence immunity and digestion",
    recommendedDosage: "5-10 billion CFU per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Yaourt", "Kefir", "Choucroute", "Kimchi", "Kombucha"],
    efficacyScore: 85,
    cautions: "See a doctor if you have a weakened immune system",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Digestive problems", "Skin problems", "Fringales"],
    targetGoals: ["Support my digestion", "Strengthen my immunity", "Improve my skin"],
    categories: ["gut-health", "immune", "digestive"],
    relatedTerms: ["microbiome", "gut bacteria", "lactobacillus"]
  },
  
  "prebiotics": {
    name: "Prebiotic fiber",
    description: "Nourish beneficial gut bacteria for better digestive health",
    category: "Prebiotics",
    benefits: [
      "Nourishes good intestinal bacteria",
      "Promotes healthy digestion",
      "Helps regulate appetite",
      "Contributes to glycemic balance"
    ],
    scientificBasis: "Prebiotics are non-digestible fibers that serve as a substrate for beneficial bacteria in the gut",
    recommendedDosage: "5-10 g per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Chicory", "Topinambour", "Oignon", "Ail", "Green banana", "Avoine"],
    efficacyScore: 80,
    cautions: "Introduce gradually to avoid bloating",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Digestive problems", "Fringales"],
    targetGoals: ["Support my digestion", "Balance my weight"],
    categories: ["gut-health", "digestive", "fiber"],
    relatedTerms: ["inulin", "FOS", "GOS"]
  },
  
  "ashwagandha": {
    name: "Ashwagandha",
    description: "Adaptogenic herb that helps reduce stress and supports hormonal balance",
    category: "Adaptogenic plants",
    benefits: [
      "Helps reduce stress and anxiety",
      "Supports hormonal balance",
      "Helps improve sleep quality",
      "Helps maintain energy and vitality"
    ],
    scientificBasis: "Ashwagandha has demonstrated modulatory effects on cortisol levels and neurotransmitter activity",
    recommendedDosage: "300-500 mg per day (standardized extract)",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Ashwagandha root"],
    efficacyScore: 85,
    cautions: "Not recommended in case of autoimmune disease or pregnancy",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Stress", "Anxiety", "Sleep problems", "Fatigue"],
    targetGoals: ["Reduce my stress", "Better sleep", "More energy"],
    categories: ["adaptogen", "stress", "sleep", "hormonal-balance"],
    relatedTerms: ["withania somnifera", "adaptogen", "stress relief"]
  },
  
  "rhodiola": {
    name: "Rhodiola Rosea",
    description: "Adaptogenic plant that fights fatigue and improves cognitive performance",
    category: "Adaptogenic plants",
    benefits: [
      "Helps fight fatigue",
      "Supports cognitive performance",
      "Helps reduce stress",
      "Helps maintain physical and mental energy"
    ],
    scientificBasis: "Rhodiola has shown positive effects on reducing mental fatigue and improving cognitive performance",
    recommendedDosage: "200-400 mg per day (standardized extract)",
    timeToEffect: "1-3 weeks",
    naturalSources: ["Rhodiola root"],
    efficacyScore: 80,
    cautions: "May interact with certain medications, not recommended in cases of bipolar disorder",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Stress", "Anxiety", "Lack of concentration"],
    targetGoals: ["More energy", "Reduce my stress", "Improve my concentration"],
    categories: ["adaptogen", "energy", "cognitive", "stress"],
    relatedTerms: ["golden root", "mental fatigue", "cognitive performance"]
  },
  
  "melatonin": {
    name: "Natural melatonin",
    description: "Hormone that regulates the sleep-wake cycle, helps with falling asleep",
    category: "Sommeil",
    benefits: [
      "Helps reduce the time it takes to fall asleep",
      "Helps to alleviate the effects of jet lag",
      "Helps regulate the sleep-wake cycle",
      "May improve sleep quality"
    ],
    scientificBasis: "Melatonin is a hormone naturally produced by the pineal gland that regulates the circadian rhythm",
    recommendedDosage: "1-3 mg before bed",
    timeToEffect: "From the first take",
    naturalSources: ["Montmorency cherry", "Riz", "But", "Avoine"],
    efficacyScore: 75,
    cautions: "May cause drowsiness, do not drive after taking",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Sleep problems"],
    targetGoals: ["Better sleep"],
    categories: ["sleep", "hormonal-balance", "circadian-rhythm"],
    relatedTerms: ["sleep hormone", "circadian rhythm", "jet lag"]
  },
  
  "valerian": {
    name: "Valerian",
    description: "Plant that promotes falling asleep and improves the quality of sleep",
    category: "Plants for sleep",
    benefits: [
      "Help with falling asleep",
      "Helps improve sleep quality",
      "Helps reduce mild anxiety",
      "Promotes relaxation"
    ],
    scientificBasis: "Valerian may influence levels of GABA, a calming neurotransmitter in the brain.",
    recommendedDosage: "300-600 mg of extract before bed",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Valerian root"],
    efficacyScore: 70,
    cautions: "May interact with certain medications, avoid alcohol",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Sleep problems", "Stress", "Anxiety"],
    targetGoals: ["Better sleep", "Reduce my stress"],
    categories: ["sleep", "relaxation", "herbal"],
    relatedTerms: ["valeriana officinalis", "sleep aid", "GABA"]
  },
  
  "curcumin": {
    name: "Turmeric and black pepper",
    description: "Powerful natural anti-inflammatory that supports digestive and joint health",
    category: "Natural anti-inflammatories",
    benefits: [
      "Natural anti-inflammatory properties",
      "Supports digestive health",
      "Helps maintain joint health",
      "Contributes to cellular protection"
    ],
    scientificBasis: "Curcumin, the active ingredient in turmeric, has demonstrated anti-inflammatory effects comparable to certain medications",
    recommendedDosage: "500-1000 mg turmeric with 5-10 mg piperine",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Turmeric root", "Black pepper"],
    efficacyScore: 75,
    cautions: "Consult a doctor if on anticoagulants",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Joint pain", "Digestive problems"],
    targetGoals: ["Support my digestion"],
    categories: ["anti-inflammatory", "digestive", "joint-health"],
    relatedTerms: ["turmeric", "curcuminoids", "piperine"]
  },
  
  "coq10": {
    name: "Coenzyme Q10",
    description: "Supports cellular energy production and has antioxidant properties",
    category: "Antioxydants",
    benefits: [
      "Supports cellular energy production",
      "Antioxidant properties",
      "Contributes to cardiovascular health",
      "Helps maintain energy levels"
    ],
    scientificBasis: "CoQ10 is an essential cofactor in the mitochondrial electron transport chain, involved in the production of ATP",
    recommendedDosage: "100-200 mg per day",
    timeToEffect: "4-12 weeks",
    naturalSources: ["Viandes", "Oily fish", "Legumes", "Noix"],
    efficacyScore: 70,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Joint pain"],
    targetGoals: ["More energy"],
    categories: ["antioxidant", "energy", "heart-health"],
    relatedTerms: ["ubiquinone", "cellular energy", "mitochondria"]
  },
  
  "ginseng": {
    name: "Ginseng",
    description: "Adaptogenic plant that maintains energy and improves cognitive performance",
    category: "Adaptogenic plants",
    benefits: [
      "Helps maintain physical and mental energy",
      "Supports cognitive performance",
      "Contributes to the normal functioning of the immune system",
      "Helps maintain vitality"
    ],
    scientificBasis: "Ginseng contains ginsenosides which are thought to modulate energy pathways and adaptation to stress.",
    recommendedDosage: "200-400 mg per day (standardized extract)",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Ginseng root"],
    efficacyScore: 75,
    cautions: "Not recommended in cases of hypertension, may interact with certain medications",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Lack of concentration"],
    targetGoals: ["More energy", "Improve my concentration", "Strengthen my immunity"],
    categories: ["adaptogen", "energy", "cognitive", "immune"],
    relatedTerms: ["panax ginseng", "ginsenosides", "vitality"]
  },
  
  "l_theanine": {
    name: "L-Theanine",
    description: "Amino acid promoting relaxation without drowsiness, improves concentration",
    category: "Amino acids",
    benefits: [
      "Promotes relaxation without drowsiness",
      "Improves concentration and attention",
      "Reduces the negative effects of stress",
      "May improve sleep quality"
    ],
    scientificBasis: "L-theanine increases alpha waves in the brain, associated with an alert state of relaxation",
    recommendedDosage: "100-200 mg, 1-2 times a day",
    timeToEffect: "30 minutes to 1 hour",
    naturalSources: ["Green tea", "Black tea"],
    efficacyScore: 85,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Stress", "Anxiety", "Sleep problems", "Lack of concentration"],
    targetGoals: ["Reduce my stress", "Improve my concentration", "Better sleep"],
    categories: ["relaxation", "cognitive", "stress", "sleep"],
    relatedTerms: ["alpha waves", "focus", "calm alertness"]
  },
  
  "lions_mane": {
    name: "Lion's Mane Mushroom",
    description: "Medicinal mushroom that supports cognitive functions and neurological health",
    category: "Medicinal mushrooms",
    benefits: [
      "Supports cognitive functions and memory",
      "Promotes nervous system health",
      "Neuroprotective properties",
      "Supports the immune system"
    ],
    scientificBasis: "Lion's Mane contains compounds that stimulate the production of nerve growth factor (NGF)",
    recommendedDosage: "500-1000 mg of extract per day",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Lion's Mane Mushroom"],
    efficacyScore: 75,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Lack of concentration", "Memory problems"],
    targetGoals: ["Improve my concentration"],
    categories: ["cognitive", "brain-health", "mushroom"],
    relatedTerms: ["hericium erinaceus", "NGF", "brain function"]
  },
  
  "alpha_gpc": {
    name: "Alpha-GPC",
    description: "Choline compound that improves cognitive functions and mental performance",
    category: "Cholinergiques",
    benefits: [
      "Improves cognitive functions",
      "Supports memory and learning",
      "Promotes concentration and mental clarity",
      "Precursor of acetylcholine, important neurotransmitter"
    ],
    scientificBasis: "Alpha-GPC increases levels of acetylcholine, a neurotransmitter crucial for memory and cognitive functions",
    recommendedDosage: "300-600 mg per day",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Dairy products", "Organs (liver)"],
    efficacyScore: 80,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien"],
    targetSymptoms: ["Lack of concentration", "Memory problems"],
    targetGoals: ["Improve my concentration"],
    categories: ["cognitive", "brain-health", "focus"],
    relatedTerms: ["choline", "acetylcholine", "cognitive enhancer"]
  },
  
  "anti-inflammatory-diet": {
    name: "Anti-inflammatory diet",
    description: "Dietary approach that reduces systemic inflammation and improves overall health",
    category: "Dietary approaches",
    benefits: [
      "Reduces systemic inflammation",
      "Supports digestive health",
      "Improves cardiovascular health",
      "Promotes energy balance"
    ],
    scientificBasis: "Observational studies show correlation between consumption of anti-inflammatory foods and reduction of blood inflammatory markers",
    recommendedDosage: "Daily application of dietary principles",
    timeToEffect: "2-4 weeks",
    naturalSources: ["Colorful fruits and vegetables", "Oily fish", "Nuts and seeds", "Olive oil", "Spices (turmeric, ginger)"],
    efficacyScore: 85,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Joint pain", "Digestive problems", "Fatigue", "Skin problems"],
    targetGoals: ["Support my digestion", "More energy", "Improve my skin"],
    categories: ["anti-inflammatory", "digestive", "lifestyle", "nutritional-approach"],
    relatedTerms: ["Mediterranean diet", "polyphenols", "omega-3:omega-6 ratio"]
  },
  
  "vitamin-d-supplement": {
    name: "Vitamin D Supplement",
    description: "A daily intake of vitamin D, essential for immunity and bone health",
    category: "Vitamines",
    benefits: [
      "Strengthens the immune system",
      "Contributes to bone health",
      "Improves calcium absorption",
      "Positively influences mood"
    ],
    scientificBasis: "Clinical studies show that vitamin D supplementation can reduce the risk of respiratory infections by 30% in deficient people",
    recommendedDosage: "1000-2000 IU per day",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Sun exposure", "Oily fish", "Egg yolks"],
    efficacyScore: 90,
    cautions: "Overdose is possible with high-dose supplements over the long term",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Muscle weakness", "Low mood in winter"],
    targetGoals: ["Strengthen my immunity", "Optimize my health"],
    categories: ["immunity", "os", "nutrition"],
    relatedTerms: ["vitamin-d"]
  },
  
  "circadian-rhythm-optimization": {
    name: "Circadian rhythm optimization",
    description: "Stratégies pour synchroniser votre horloge biologique et améliorer la qualité du sommeil",
    category: "Lifestyle approaches",
    benefits: [
      "Improves sleep quality",
      "Optimizes energy levels",
      "Regulates stress hormones",
      "Supports cognitive function"
    ],
    scientificBasis: "Chronobiology demonstrates the importance of aligning biological rhythms with natural light-dark cycles",
    recommendedDosage: "Specific daily practices",
    timeToEffect: "1-3 weeks",
    naturalSources: ["Exposure to natural light", "Timed feeding", "Regular routines"],
    efficacyScore: 85,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Sleep problems", "Fatigue", "Irritability"],
    targetGoals: ["Better sleep", "More energy", "Reduce my stress"],
    categories: ["sommeil", "lifestyle", "energy"],
    relatedTerms: ["biological clock", "melatonin", "phototherapy"]
  },
  
  "mindfulness-meditation": {
    name: "Mindfulness meditation",
    description: "Practice that reduces stress and improves mental health",
    category: "Mental practices",
    benefits: [
      "Reduces stress and anxiety levels",
      "Improves concentration and mental clarity",
      "Promotes better sleep",
      "Strengthens emotional regulation"
    ],
    scientificBasis: "Neuroscience studies show that regular meditation changes brain structure and activity",
    recommendedDosage: "10-20 minutes daily",
    timeToEffect: "2-8 weeks of regular practice",
    naturalSources: ["Guided practice", "Applications", "Online or in-person courses"],
    efficacyScore: 80,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Stress", "Anxiety", "Sleep problems", "Mental ruminations"],
    targetGoals: ["Reduce my stress", "Better sleep", "Improve my concentration"],
    categories: ["mental", "stress", "well-being"],
    relatedTerms: ["meditation", "mindfulness", "stress reduction"]
  },
  
  "intermittent-fasting": {
    name: "Intermittent fasting",
    description: "Dietary approach that alternates periods of fasting and eating to optimize metabolism",
    category: "Nutrition approaches",
    benefits: [
      "Promotes metabolic balance",
      "Supports weight management",
      "Improves insulin sensitivity",
      "Stimulates cellular autophagy"
    ],
    scientificBasis: "Research indicates that intermittent fasting can trigger cellular repair processes and improve metabolic markers",
    recommendedDosage: "Fasting window of 14-18 hours per 24 hours",
    timeToEffect: "2-4 weeks",
    naturalSources: ["16:8, 5:2 protocols, or other custom approaches"],
    efficacyScore: 85,
    cautions: "Not recommended for people with certain eating disorders or medical conditions",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Weight problems", "Fatigue after meals", "Fringales"],
    targetGoals: ["Balance my weight", "More energy", "Optimize my health"],
    categories: ["metabolism", "poids", "longevity"],
    relatedTerms: ["autophagie", "ketosis", "food window"]
  },
  
  "berberine": {
    name: "Berberine",
    description: "Plant compound that improves glucose metabolism and cardiovascular health",
    category: "Plant compounds",
    benefits: [
      "Supports glucose metabolism",
      "Contributes to lipid balance",
      "Promotes gut health",
      "Anti-inflammatory properties"
    ],
    scientificBasis: "Clinical studies show that berberine can improve insulin sensitivity and lipid markers",
    recommendedDosage: "500-1500 mg per day, divided into several doses",
    timeToEffect: "4-8 weeks",
    naturalSources: ["Barberry", "Goldenseal", "Chinese Coptis"],
    efficacyScore: 80,
    cautions: "May interact with certain medications, consult a healthcare professional",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Metabolic imbalances", "Digestive problems"],
    targetGoals: ["Balance my weight", "Optimize my health"],
    categories: ["metabolism", "digestion", "cardiovasculaire"],
    relatedTerms: ["AMPK", "glucose metabolism", "insuline"]
  },
  
  "nutrient-timing": {
    name: "Chrononutrition",
    description: "Optimization of food intake times to maximize metabolic benefits",
    category: "Nutrition approaches",
    benefits: [
      "Optimizes nutrient utilization",
      "Improves physical performance",
      "Supports muscle recovery",
      "Promotes better sleep"
    ],
    scientificBasis: "Nutritional chronobiology demonstrates that meal timing affects metabolism, insulin and gene expression",
    recommendedDosage: "Personalized adaptation of eating schedules",
    timeToEffect: "2-3 weeks",
    naturalSources: ["Adjustment of meals according to circadian rhythm and activity"],
    efficacyScore: 75,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Fatigue", "Slow recovery", "Sleep problems"],
    targetGoals: ["More energy", "Balance my weight", "Optimize my health"],
    categories: ["nutrition", "metabolism", "performance"],
    relatedTerms: ["chrononutrition", "anabolic window", "metabolism"]
  },
  
  "micronutrient-assessment": {
    name: "Micronutrient Assessment",
    description: "Personalized analysis of vitamin and mineral needs for optimal nutrition",
    category: "Diagnostic approaches",
    benefits: [
      "Identifies specific deficiencies",
      "Allows targeted supplementation",
      "Optimizes cellular functioning",
      "Supports energy and vitality"
    ],
    scientificBasis: "Studies show that subclinical micronutrient deficiencies are common and affect many physiological functions",
    recommendedDosage: "Initial assessment followed by personalized supplementation",
    timeToEffect: "Varies depending on the deficiencies identified",
    naturalSources: ["Advanced blood tests", "Hair analyzes", "Specialized questionnaires"],
    efficacyScore: 90,
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Chronic fatigue", "Skin/Hair Problems", "Weakened immune system"],
    targetGoals: ["Optimize my health", "More energy", "Strengthen my immunity"],
    categories: ["nutrition", "prevention", "personnalisation"],
    relatedTerms: ["oligoscan", "spectrometry", "functional medicine"]
  },
  
  "omega3-supplementation": {
    name: "Omega-3 supplementation",
    description: "Balanced intake of essential fatty acids for cardiovascular and brain health",
    category: "Essential fatty acids",
    benefits: [
      "Supports cardiovascular health",
      "Promotes optimal cognitive functions",
      "Has anti-inflammatory properties",
      "Contributes to cellular health"
    ],
    scientificBasis: "Numerous studies demonstrate the benefits of EPA and DHA on inflammation and brain function",
    recommendedDosage: "1000-2000 mg combined EPA and DHA per day",
    timeToEffect: "3-6 months for full effects",
    naturalSources: ["Oily fish", "Marine algae", "Algae-derived oils (for vegans)"],
    efficacyScore: 85,
    cautions: "Consult a doctor if you are taking blood thinners",
    compatibleDiets: ["Omnivore", "Flexitarien", "Pescetarien", "Vegetarian", "Vegan"],
    targetSymptoms: ["Chronic inflammation", "Reduced mental clarity", "Skin dryness"],
    targetGoals: ["Improve my concentration", "Reduce my stress", "Optimize my health"],
    categories: ["cerveau", "heart", "anti-inflammatoire"],
    relatedTerms: ["EPA", "DHA", "essential fatty acids"]
  }
};

export { SUPPLEMENT_CATALOG };
export default SUPPLEMENT_CATALOG;
