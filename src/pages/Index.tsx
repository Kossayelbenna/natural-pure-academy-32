import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from '@/components/SEOHead';
import {
  ChartBar,
  Brain,
  Heart,
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  Zap,
  Lock,
  FlaskConical,
  Microscope,
  Globe
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" }
  }),
};

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="NATURAL&PURE — AI-Powered Nutritional Science | Nonprofit"
        description="A nonprofit research organization democratizing evidence-based nutrition education through artificial intelligence. Free, open-source, science-backed."
        canonicalUrl="https://natural-and-pure.org"
        keywords={["nutrition science", "AI nutrition", "nonprofit research", "evidence-based nutrition", "Claude AI", "NutriAI"]}
      />

      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Arizona Nonprofit Organization · EIN: 98-1830546
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                AI-Powered
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Nutritional Science
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                A nonprofit research organization democratizing evidence-based nutrition education through artificial intelligence — free for everyone, forever.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl px-8 py-4 text-base font-semibold shadow-lg shadow-emerald-900/50 transition-all duration-300 hover:shadow-emerald-800/60 hover:-translate-y-0.5">
                  <Link to="/research" className="flex items-center gap-2">
                    <Microscope className="h-5 w-5" />
                    Learn About Our Research
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5">
                  <Link to="/quiz" className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Try Our Assessment
                  </Link>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
              >
                {[
                  { icon: <Lock className="h-4 w-4" />, text: "No signup required" },
                  { icon: <CheckCircle className="h-4 w-4" />, text: "100% free forever" },
                  { icon: <Globe className="h-4 w-4" />, text: "Open source (Apache 2.0)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-500">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
            <span className="text-xs">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MISSION PILLARS SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Science-First Nutrition
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                We combine peer-reviewed research with advanced AI to bring evidence-based nutrition guidance to everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <ChartBar className="h-8 w-8" />,
                  color: "from-blue-500 to-indigo-600",
                  bg: "from-blue-50 to-indigo-50",
                  border: "border-blue-100",
                  tag: "Evidence-Based",
                  title: "Built on Science",
                  desc: "Our content is grounded in peer-reviewed research, not guesswork. Every recommendation is backed by the latest nutritional science.",
                  detail: "4,800+ studies reviewed",
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  color: "from-emerald-500 to-teal-600",
                  bg: "from-emerald-50 to-teal-50",
                  border: "border-emerald-100",
                  tag: "AI-Powered",
                  title: "Claude AI Analysis",
                  desc: "We use Anthropic's Claude to analyze thousands of scientific papers, identifying patterns, gaps, and consensus in nutrition research.",
                  detail: "5,000+ abstracts analyzed",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  color: "from-rose-500 to-pink-600",
                  bg: "from-rose-50 to-pink-50",
                  border: "border-rose-100",
                  tag: "Nonprofit",
                  title: "Free & Open",
                  desc: "100% free, 100% nonprofit. No ads, no paywalls, no commercial agenda. Just science for everyone, everywhere.",
                  detail: "CC-0 content · Apache 2.0 code",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${card.bg} border ${card.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">{card.tag}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{card.desc}</p>
                  <div className="text-sm font-medium text-slate-500 border-t border-slate-200 pt-3">
                    {card.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            IMPACT SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-700/50">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Measurable Goals
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Our Year 1 targets for NutriAI — the platform that makes nutrition science accessible to all.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  stat: "10,000+",
                  label: "Users Served",
                  desc: "Target for Year 1",
                  icon: <Users className="h-6 w-6" />,
                  color: "text-emerald-400",
                  border: "border-emerald-500/20",
                },
                {
                  stat: "5,000+",
                  label: "Research Papers",
                  desc: "Scientific abstracts processed by AI",
                  icon: <BookOpen className="h-6 w-6" />,
                  color: "text-teal-400",
                  border: "border-teal-500/20",
                },
                {
                  stat: "100%",
                  label: "Open Access",
                  desc: "Free and open-source platform",
                  icon: <Globe className="h-6 w-6" />,
                  color: "text-cyan-400",
                  border: "border-cyan-500/20",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-slate-800/60 border ${item.border} rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300`}
                >
                  <div className={`${item.color} flex justify-center mb-4`}>{item.icon}</div>
                  <div className={`text-5xl font-bold ${item.color} mb-2`}>{item.stat}</div>
                  <div className="text-white font-semibold text-lg mb-1">{item.label}</div>
                  <div className="text-slate-500 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW WE USE AI SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                    Powered by Claude
                  </span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Advanced AI for<br />
                    <span className="text-indigo-600">Nutritional Science</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We use Anthropic's Claude API to analyze thousands of peer-reviewed nutrition research papers — identifying evidence gaps, synthesizing consensus, and generating personalized, citation-backed guidance.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Abstract analysis & evidence quality scoring",
                      "Evidence gap mapping across 100+ nutrition topics",
                      "Personalized recommendation generation with citations",
                      "Educational quiz content creation",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 rounded-xl">
                    <Link to="/research" className="flex items-center gap-2">
                      See How It Works
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-slate-950 rounded-2xl p-6 font-mono text-sm shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-slate-500 text-xs ml-2">nutriai_claude.py</span>
                  </div>
                  <div className="space-y-1 text-sm leading-relaxed">
                    <p><span className="text-purple-400">def</span> <span className="text-emerald-400">analyze_abstract</span><span className="text-slate-300">(abstract):</span></p>
                    <p className="pl-4"><span className="text-yellow-400">prompt</span> <span className="text-slate-400">=</span> <span className="text-green-300">{`f"""Analyze this nutrition research:`}</span></p>
                    <p className="pl-8 text-green-300">{`{abstract}`}</p>
                    <p className="pl-8 text-green-300">Provide: study type, size,</p>
                    <p className="pl-8 text-green-300">findings, limitations..."""</p>
                    <p className="pl-4"><span className="text-slate-400">return</span> <span className="text-yellow-400">claude</span><span className="text-slate-400">.</span><span className="text-emerald-400">call</span><span className="text-slate-300">(prompt)</span></p>
                    <p className="mt-4"><span className="text-slate-600"># → structured evidence map</span></p>
                    <p><span className="text-slate-600"># → personalized nutrition plan</span></p>
                    <p><span className="text-slate-600"># → quiz question with citation</span></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            QUIZ CTA SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <FlaskConical className="h-4 w-4" />
                Science-Based Assessment — No Signup Required
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Test Your Knowledge?
              </h2>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
                Take our science-based nutrition assessment. Completely free, powered by evidence-based research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quiz" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-none">
                  <Zap className="h-5 w-5" />
                  Begin Assessment
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-emerald-100">
                {[
                  "No email required",
                  "Results in under 5 minutes",
                  "Evidence-backed recommendations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
