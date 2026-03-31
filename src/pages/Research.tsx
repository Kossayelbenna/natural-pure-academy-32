import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from '@/components/SEOHead';
import {
  BookOpen,
  Brain,
  Users,
  Globe,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  Zap,
  BarChart3,
  Microscope,
  FlaskConical,
  PenTool,
  Shield,
  Cpu,
  TrendingUp,
  FileText
} from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
              <p className="text-slate-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Research = () => {
  return (
    <>
      <SEOHead
        title="Research & AI Projects | NATURAL&PURE — NutriAI"
        description="NutriAI: NATURAL&PURE's flagship project using Claude AI to map evidence gaps in nutritional science. Learn how we use Anthropic's Claude API to democratize nutrition research."
        canonicalUrl="https://natural-and-pure.org/research"
        keywords={["NutriAI", "Claude API", "nutrition research", "AI science", "evidence gaps", "Anthropic", "nonprofit AI"]}
      />

      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-3 mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Active Project
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
                  <Cpu className="h-4 w-4" />
                  Powered by Claude (Anthropic)
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Our Research &{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Projects
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-400 leading-relaxed"
              >
                Using Claude to democratize nutritional science — one research paper at a time.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CURRENT PROJECT: NUTRIAI
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  Current Project
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">NutriAI</h2>
                <p className="text-2xl text-indigo-600 font-semibold mb-8">
                  Mapping Evidence Gaps in Nutritional Science Using AI
                </p>

                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    NutriAI is NATURAL&PURE's flagship project. Our goal is to use Anthropic's Claude to analyze thousands of peer-reviewed nutrition research papers and create personalized, evidence-based nutrition guidance for anyone, anywhere, free of charge.
                  </p>

                  <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      The Problem
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Despite thousands of published nutrition studies, the average person lacks access to evidence-based guidance. Nutritionists and researchers manually synthesize papers — a time-consuming process. Meanwhile, misinformation and pseudoscience dominate online nutrition discussions, leaving most people unable to make informed decisions about their health.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      The Solution
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We use Claude's advanced reasoning to create a fully automated pipeline:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Analyze abstracts and identify evidence quality",
                        "Map consensus areas and research gaps",
                        "Generate personalized recommendations",
                        "Create interactive educational content",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-emerald-600 text-white rounded-full text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-slate-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-emerald-700 font-medium mt-4 text-sm">All free. All open. All for everyone.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY THIS MATTERS
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-4">Why This Matters</span>
                <h2 className="text-4xl font-bold text-slate-900">The Case for AI-Powered Nutrition Research</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <AlertTriangle className="h-7 w-7" />,
                    color: "bg-amber-600",
                    bg: "bg-amber-50",
                    border: "border-amber-100",
                    tag: "The Challenge",
                    title: "Scientific Gap",
                    desc: "95% of people lack access to personalized, evidence-based nutrition guidance. Research exists but remains locked in academic journals, inaccessible to the public.",
                  },
                  {
                    icon: <Brain className="h-7 w-7" />,
                    color: "bg-indigo-600",
                    bg: "bg-indigo-50",
                    border: "border-indigo-100",
                    tag: "The Technology",
                    title: "AI Solution",
                    desc: "Claude can analyze thousands of papers in minutes, identifying patterns, gaps, and consensus that would take human researchers weeks or months to find.",
                  },
                  {
                    icon: <TrendingUp className="h-7 w-7" />,
                    color: "bg-emerald-600",
                    bg: "bg-emerald-50",
                    border: "border-emerald-100",
                    tag: "The Impact",
                    title: "Real Results",
                    desc: "Better health outcomes through informed decisions. Reduced chronic disease burden. Public health education at scale — free, open, and global.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`${card.bg} border ${card.border} rounded-2xl p-8`}
                  >
                    <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center text-white mb-5`}>
                      {card.icon}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">{card.tag}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS — PIPELINE
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">The Pipeline</span>
                <h2 className="text-4xl font-bold text-slate-900">How NutriAI Works</h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    icon: <BookOpen className="h-6 w-6" />,
                    color: "bg-blue-600",
                    title: "Scientific Literature Collection",
                    desc: "We continuously collect peer-reviewed nutrition research abstracts from PubMed, Google Scholar, and institutional repositories — building a living database of nutritional science.",
                  },
                  {
                    step: "02",
                    icon: <Brain className="h-6 w-6" />,
                    color: "bg-indigo-600",
                    title: "Claude AI Analysis",
                    desc: "We send abstracts to Claude for deep analysis. Claude identifies: methodology quality, sample sizes, effect sizes, study limitations, population groups, contradictions, and consensus areas across the literature.",
                  },
                  {
                    step: "03",
                    icon: <PenTool className="h-6 w-6" />,
                    color: "bg-purple-600",
                    title: "Evidence-Based Content Generation",
                    desc: "Claude synthesizes findings and generates educational content, personalized recommendations, and quiz questions — all with citations to specific peer-reviewed research.",
                  },
                  {
                    step: "04",
                    icon: <Users className="h-6 w-6" />,
                    color: "bg-emerald-600",
                    title: "Free User Access",
                    desc: "Users access the platform at no cost, take evidence-based assessments, receive personalized nutrition guidance, and learn through interactive educational content.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 items-start p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-slate-400">STEP {item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLAUDE API INTEGRATION — CRITICAL SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
                  <Cpu className="h-4 w-4" />
                  Anthropic Claude API
                </span>
                <h2 className="text-4xl font-bold mb-4">Why We Built NutriAI on Claude</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  NATURAL&PURE relies on Anthropic's Claude API for core platform functionality. Here's exactly why Claude was chosen and how it powers NutriAI.
                </p>
              </motion.div>

              {/* Why Claude */}
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {[
                  {
                    icon: <Brain className="h-6 w-6" />,
                    title: "Advanced Reasoning",
                    desc: "Claude's advanced reasoning capabilities allow us to understand complex scientific papers, identify methodological quality, and synthesize contradictory findings — critical for trustworthy nutrition guidance.",
                  },
                  {
                    icon: <FileText className="h-6 w-6" />,
                    title: "Long Context Window",
                    desc: "Claude's long context window allows us to analyze multiple papers simultaneously, identifying patterns and contradictions across the full research landscape in a single call.",
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Constitutional AI",
                    desc: "Anthropic's Constitutional AI approach means Claude produces factually accurate, evidence-based responses that minimize hallucinations. For health guidance, accuracy is non-negotiable.",
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Safety-First Approach",
                    desc: "Our nonprofit mission aligns perfectly with Anthropic's commitment to AI safety and beneficial AI. We trust Claude to power critical health recommendations for the public.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Pseudocode Examples */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">How We Use the Claude API</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Abstract Analysis",
                      code: `function analyzeAbstract(abstract) {
  prompt = \`
    Analyze this nutrition research abstract:
    \${abstract}
    
    Provide:
    1. Study type (RCT, cohort, observational)
    2. Sample size & population
    3. Key findings & effect size
    4. Study limitations
    5. Evidence quality score (1-5)
  \`
  return claude.call(prompt)
}`,
                    },
                    {
                      label: "Evidence Gap Mapping",
                      code: `function mapEvidence(topic, abstracts) {
  prompt = \`
    Synthesize these abstracts on: \${topic}
    \${abstracts.join("\\n")}
    
    Identify:
    1. Areas of scientific consensus
    2. Contradictions & conflicts
    3. Research gaps (missing studies)
    4. Strength of evidence by claim
  \`
  return claude.call(prompt)
}`,
                    },
                    {
                      label: "Personalized Recommendation",
                      code: `function getRecommendation(userProfile, evidence) {
  prompt = \`
    User profile:
    - Age: \${userProfile.age}
    - Goals: \${userProfile.goals}
    - Preferences: \${userProfile.diet}
    - Allergies: \${userProfile.allergies}
    
    Based on this evidence base:
    \${evidence}
    
    Generate evidence-based nutrition
    plan with citations.
  \`
  return claude.call(prompt)
}`,
                    },
                    {
                      label: "Educational Quiz Generation",
                      code: `function generateQuiz(topic, summary) {
  prompt = \`
    Based on nutrition research on: \${topic}
    Evidence summary: \${summary}
    
    Generate 5 quiz questions:
    1. Question text
    2. 4 multiple choice options
    3. Correct answer
    4. Explanation with citation
    5. Difficulty level (1-3)
  \`
  return claude.call(prompt)
}`,
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>
                        <span className="text-slate-400 text-xs font-medium ml-1">{item.label}</span>
                      </div>
                      <pre className="p-4 text-xs text-slate-300 overflow-x-auto leading-relaxed font-mono whitespace-pre-wrap">
                        {item.code}
                      </pre>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RESEARCH METRICS
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">Our Metrics</span>
                <h2 className="text-4xl font-bold text-slate-900">Target Impact (Year 1)</h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { stat: "5,000+", label: "Scientific Abstracts", icon: <BookOpen className="h-5 w-5" />, color: "text-blue-600", bg: "bg-blue-50" },
                  { stat: "100+", label: "Nutrition Topics", icon: <Microscope className="h-5 w-5" />, color: "text-indigo-600", bg: "bg-indigo-50" },
                  { stat: "10,000+", label: "Users (Year 1)", icon: <Users className="h-5 w-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { stat: "100%", label: "Free & Open", icon: <Globe className="h-5 w-5" />, color: "text-teal-600", bg: "bg-teal-50" },
                  { stat: "30+", label: "Research Areas", icon: <BarChart3 className="h-5 w-5" />, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`${item.bg} rounded-2xl p-5 text-center`}
                  >
                    <div className={`${item.color} flex justify-center mb-3`}>{item.icon}</div>
                    <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.stat}</div>
                    <div className="text-xs text-slate-600 font-medium leading-tight">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ ACCORDION
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-4">FAQ</span>
                <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                {[
                  {
                    question: "How does the AI improve over time?",
                    answer: "Claude's improved reasoning means better analysis with each model update. We also incorporate user feedback and new research papers continuously, improving both our evidence base and the quality of recommendations.",
                  },
                  {
                    question: "What about AI hallucinations?",
                    answer: "Constitutional AI and mandatory citations significantly reduce hallucinations. Every recommendation includes links to source research, and users can independently verify any claim. We also flag low-confidence findings clearly.",
                  },
                  {
                    question: "Why specifically Claude (Anthropic)?",
                    answer: "Claude's advanced reasoning, long context window, and Constitutional AI make it ideal for analyzing complex scientific literature safely. It produces more accurate, nuanced scientific analysis than alternatives, and Anthropic's safety-first mission aligns with our nonprofit values.",
                  },
                  {
                    question: "Is this truly nonprofit?",
                    answer: "Yes. NATURALPURE CORPORATION (EIN: 98-1830546) is an Arizona nonprofit corporation. We have no commercial agenda, accept no advertising, and all content is public domain (CC-0). All code is open-source (Apache 2.0). We operate entirely for public benefit.",
                  },
                  {
                    question: "Can I contribute research or collaborate?",
                    answer: "Absolutely! We welcome collaborations with researchers, institutions, and individuals who want to advance evidence-based nutrition education. Contact us at research@natural-and-pure.org or through our contact page.",
                  },
                ].map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
              <p className="text-xl text-indigo-200 mb-10">
                Take our evidence-based assessment or reach out to collaborate on nutritional science research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl px-8">
                  <Link to="/quiz" className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Try Our Assessment
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Research;
