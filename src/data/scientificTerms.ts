
export interface ScientificTerm {
  id?: string;
  term: string;
  title?: string;
  definition: string;
  description?: string;
  category?: string;
  source?: string;
  relatedTerms?: string[];
}

export const scientificTerms: ScientificTerm[] = [
  {
    id: "vitamin-d",
    term: "Vitamine D",
    title: "Vitamine D",
    definition: "Steroid hormone essential for calcium absorption, immune function and bone health.",
    category: "micronutriment",
    relatedTerms: ["calcium", "sunshine-vitamin"]
  },
  {
    id: "microbiome",
    term: "Gut microbiome",
    title: "Gut microbiome",
    definition: "Complex ecosystem of bacteria, viruses and other microorganisms present in the human digestive tract.",
    category: "digestive-system",
    relatedTerms: ["probiotics", "prebiotics"]
  },
  {
    id: "probiotics",
    term: "Probiotiques",
    title: "Probiotiques",
    definition: "Live microorganisms which, when administered in adequate amounts, confer a health benefit.",
    category: "supplement",
    relatedTerms: ["gut-health", "microbiome"]
  },
  {
    id: "inflammation",
    term: "Chronic inflammation",
    title: "Chronic inflammation",
    definition: "Persistent inflammatory response of the body that can contribute to various chronic diseases.",
    category: "processus-physiologique",
    relatedTerms: ["cytokines", "immune-system"]
  },
  {
    id: "antioxidant",
    term: "Antioxydants",
    title: "Antioxydants",
    definition: "Substances that can neutralize free radicals and reduce oxidative damage in cells.",
    category: "biochimie",
    relatedTerms: ["free-radicals", "oxidative-stress"]
  },
  {
    id: "circadian-rhythm",
    term: "Circadian rhythm",
    title: "Circadian rhythm",
    definition: "Internal biological clock that regulates sleep-wake cycles and many physiological processes over a 24-hour period.",
    category: "chronobiologie",
    relatedTerms: ["melatonin", "sleep-wake-cycle"]
  },
  {
    id: "cortisol",
    term: "Cortisol",
    title: "Cortisol",
    definition: "Steroid hormone produced by the adrenal glands, involved in the stress response and regulation of metabolism.",
    category: "hormone",
    relatedTerms: ["stress-hormone", "hpa-axis"]
  },
  {
    id: "adaptogens",
    term: "Adaptogens",
    title: "Adaptogens",
    definition: "Natural substances that help the body adapt to stress and regain balance.",
    category: "herbal medicine",
    relatedTerms: ["stress-response", "homeostasis"]
  },
  {
    id: "bioavailability",
    term: "Bioavailability",
    title: "Bioavailability",
    definition: "The proportion of a nutrient or substance that is absorbed and used by the body.",
    category: "pharmacologie",
    relatedTerms: ["absorption", "metabolism"]
  },
  {
    id: "rda",
    term: "Recommended daily intake",
    title: "Recommended daily intake",
    definition: "Average daily amount of a nutrient needed to meet the needs of most healthy individuals.",
    category: "nutrition",
    relatedTerms: ["dietary-reference-intakes", "nutritional-requirements"]
  },
  {
    term: "adaptogen",
    definition: "Natural substance that helps the body adapt to stress and normalize physiological functions.",
    category: "herbal medicine",
  },
  {
    term: "antioxydant",
    definition: "Molecule that neutralizes free radicals, thus protecting cells against oxidative damage.",
    category: "biochimie",
  },
  {
    term: "bioavailability",
    definition: "Fraction of an administered substance that reaches the bloodstream and can exert its biological effect.",
    category: "pharmacologie",
  },
  {
    term: "double blind",
    definition: "Study method where neither participants nor researchers know who is receiving the active treatment or the placebo.",
    category: "methodology",
  },
  {
    term: "immunomodulateur",
    definition: "Substance that modifies (stimulates or suppresses) the activity of the immune system.",
    category: "immunologie",
  },
  {
    term: "microbiome",
    definition: "All microorganisms (bacteria, viruses, fungi) and their genes that live in a specific environment such as the intestine.",
    category: "microbiologie",
  },
  {
    term: "randomized controlled study",
    definition: "Type of scientific study where participants are randomly assigned to different treatment groups to minimize bias.",
    category: "methodology",
    source: "PubMed",
  },
  {
    term: "placebo",
    definition: "Substance without therapeutic effect but presented as an active medication to evaluate the psychological effects of treatment.",
    category: "methodology",
  },
  {
    term: "synergie",
    definition: "Interaction of several elements which, together, produce a total effect greater than the sum of the individual effects.",
    category: "pharmacologie",
  },
  {
    term: "phytonutriment",
    definition: "A bioactive compound found in plants that has beneficial health effects without being essential for life.",
    category: "nutrition",
  },
  {
    term: "biomarqueur",
    definition: "Measurable biological characteristic related to a normal or pathological process, used to assess health status.",
    category: "diagnostic",
  },
  {
    term: "meta-analysis",
    definition: "A statistical method combining the results of several independent studies to obtain a more precise estimate of an effect.",
    category: "methodology",
    source: "Cochrane Library",
  },
];

export default scientificTerms;
