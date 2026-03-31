import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from '@/components/SEOHead';
import {
  FlaskConical,
  BookOpen,
  Brain,
  Mail,
  MapPin,
  ArrowRight,
  Building2,
  ShieldCheck,
  CheckCircle,
  User
} from "lucide-react";

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us | NATURAL&PURE — Nonprofit Nutrition Research"
        description="Learn about NATURALPURE CORPORATION, an Arizona nonprofit (EIN: 98-1830546) using AI to democratize evidence-based nutrition research. Founded November 2024 by Kossay El Benna."
        canonicalUrl="https://natural-and-pure.org/about"
        keywords={["NATURALPURE CORPORATION", "nonprofit nutrition", "Arizona nonprofit", "EIN 98-1830546", "Kossay El Benna"]}
      />

      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8"
              >
                <Building2 className="h-4 w-4" />
                Arizona Nonprofit Corporation · Founded November 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                About{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  NATURAL&PURE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-400 leading-relaxed"
              >
                Democratizing evidence-based nutrition through AI and open science
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHO WE ARE
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
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
                  Who We Are
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  A New Kind of Research Organization
                </h2>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>NATURAL&PURE</strong> (legally registered as <strong>NATURALPURE CORPORATION</strong>) is an Arizona-based nonprofit research organization founded in November 2024. Our mission is simple: make evidence-based nutrition accessible to everyone by combining cutting-edge AI with rigorous scientific research.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We believe that nutritional science should not be locked behind paywalls, jargon, or corporate interests. By using advanced artificial intelligence — specifically Anthropic's Claude API — we synthesize thousands of peer-reviewed research papers to create personalized, evidence-based nutrition guidance for anyone who wants it, completely free.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    As a nonprofit, every dollar goes toward our research mission. We don't run ads, we don't sell supplements, and we don't have investors pushing for profit. We exist solely to serve the public good through better health education.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MISSION & VALUES
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
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                  Our Mission & Values
                </span>
                <h2 className="text-4xl font-bold text-slate-900">
                  What Drives Us
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FlaskConical className="h-7 w-7" />,
                    color: "bg-blue-600",
                    bg: "bg-blue-50",
                    border: "border-blue-100",
                    title: "Scientific Rigor",
                    desc: "We analyze peer-reviewed research, not opinion. Every fact is traceable to published science. We prioritize methodological quality and statistical significance over popular trends.",
                    tag: "Research",
                  },
                  {
                    icon: <BookOpen className="h-7 w-7" />,
                    color: "bg-emerald-600",
                    bg: "bg-emerald-50",
                    border: "border-emerald-100",
                    title: "Public Access",
                    desc: "We make nutrition science understandable and accessible. No paywalls, no commercial agenda, no subscription fees. Scientific knowledge should be a public good.",
                    tag: "Education",
                  },
                  {
                    icon: <Brain className="h-7 w-7" />,
                    color: "bg-purple-600",
                    bg: "bg-purple-50",
                    border: "border-purple-100",
                    title: "Beneficial AI",
                    desc: "We demonstrate how advanced AI (Claude) can serve humanity and democratize knowledge, rather than concentrate power or create gatekeeping.",
                    tag: "AI Innovation",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`${card.bg} border ${card.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
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
            TEAM SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14"
              >
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                  Our Team
                </span>
                <h2 className="text-4xl font-bold text-slate-900">
                  The People Behind the Mission
                </h2>
              </motion.div>

              {/* Team Member Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Kossay El Benna</h3>
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-sm font-medium">
                      Founder & President
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">
                    Kossay is the founder and president of NATURAL&PURE, bringing expertise in both nutrition science and artificial intelligence. His vision is to democratize access to evidence-based nutrition education globally. Kossay is committed to maintaining NATURAL&PURE as a nonprofit organization solely serving the public good — refusing commercialization or advertising partnerships to preserve scientific integrity.
                  </p>
                  <a
                    href="mailto:founder@natural-and-pure.org"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white text-sm font-medium transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    founder@natural-and-pure.org
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            LEGAL INFORMATION BOX
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-10">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <ShieldCheck className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider block mb-1">Verified Nonprofit</span>
                    <h2 className="text-4xl font-bold text-slate-900">Legal Information</h2>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-blue-600 px-8 py-4">
                    <h3 className="text-white font-bold text-lg">NATURALPURE CORPORATION</h3>
                    <p className="text-blue-200 text-sm">Arizona Nonprofit Corporation</p>
                  </div>
                  <div className="p-8 grid md:grid-cols-2 gap-6">
                    {[
                      { label: "Legal Name", value: "NATURALPURE CORPORATION", mono: false },
                      { label: "EIN (Tax ID)", value: "98-1830546", mono: true },
                      { label: "Entity Type", value: "Arizona Nonprofit Corporation", mono: false },
                      { label: "Entity ID", value: "23750798", mono: true },
                      { label: "Founded", value: "November 2024", mono: false },
                      { label: "Mission Status", value: "501(c)(3) Application Filed", mono: false },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</span>
                        <span className={`text-slate-900 font-medium ${item.mono ? "font-mono text-blue-700" : ""}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                    <div className="md:col-span-2 flex flex-col gap-1 pt-4 border-t border-slate-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Registered Address</span>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                        <span className="text-slate-900 font-medium">19580 West Indian School Rd, Buckeye, AZ 85396, USA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mt-4 flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  This information can be verified through the Arizona Secretary of State's office (Entity ID: 23750798).
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            NEXT STEPS CTA
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
              <p className="text-xl text-slate-400 mb-10">
                Explore our research projects, take our evidence-based assessment, or reach out to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl px-8">
                  <Link to="/research" className="flex items-center gap-2">
                    Explore Our Research
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-xl px-8">
                  <Link to="/quiz">
                    Start Learning
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

export default About;