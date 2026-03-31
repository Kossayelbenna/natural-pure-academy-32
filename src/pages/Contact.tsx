import React, { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Mail,
  MessageSquare,
  MapPin,
  FlaskConical,
  Handshake,
  Building2,
  CheckCircle2,
  Send
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact | NATURAL&PURE — Get In Touch"
        description="Contact NATURALPURE CORPORATION (EIN: 98-1830546). Reach us for research collaboration, partnership inquiries, or general questions at natural-and-pure.org."
        canonicalUrl="https://natural-and-pure.org/contact"
        keywords={["contact NATURAL&PURE", "nonprofit contact", "research collaboration", "nutrition research contact"]}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
              >
                Get In Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-slate-400"
              >
                We welcome researchers, partners, and anyone curious about our nonprofit mission.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
              {/* Left: Contact Info */}
              <div className="space-y-6">
                {/* Main contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">NATURALPURE CORPORATION</p>
                        <p className="text-sm text-slate-600 mt-1">EIN: 98-1830546 · Arizona Nonprofit Corporation</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p className="text-sm text-slate-600 mt-1">
                          19580 West Indian School Rd<br />
                          Buckeye, AZ 85396<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-indigo-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">General Inquiries</p>
                        <a href="mailto:hello@natural-and-pure.org" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                          hello@natural-and-pure.org
                        </a>
                        <br />
                        <a href="mailto:founder@natural-and-pure.org" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                          founder@natural-and-pure.org
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* For Researchers */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900">For Researchers</h3>
                  </div>
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                    Interested in collaborating on nutritional science research or contributing abstracts and datasets to our platform? We'd love to hear from you.
                  </p>
                  <a
                    href="mailto:research@natural-and-pure.org"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
                  >
                    <Mail className="h-4 w-4" />
                    research@natural-and-pure.org
                  </a>
                </motion.div>

                {/* For Partners */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Handshake className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900">For Partners & Organizations</h3>
                  </div>
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                    Interested in integrating NutriAI into your platform or partnering with NATURAL&PURE for a shared mission? Let's talk.
                  </p>
                  <a
                    href="mailto:partnerships@natural-and-pure.org"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900"
                  >
                    <Mail className="h-4 w-4" />
                    partnerships@natural-and-pure.org
                  </a>
                </motion.div>
              </div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. We'll respond within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                    <p className="text-slate-600 mb-6">Fill out the form and we'll reply as soon as possible.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
                            Full Name
                          </label>
                          <Input id="contact-name" placeholder="Your name" required className="border-slate-200" />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
                            Email
                          </label>
                          <Input id="contact-email" type="email" placeholder="your@email.com" required className="border-slate-200" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">
                          Subject
                        </label>
                        <Select>
                          <SelectTrigger id="contact-subject" className="border-slate-200">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="partnership">Partnership / Integration</SelectItem>
                            <SelectItem value="media">Media / Press</SelectItem>
                            <SelectItem value="grants">Grants / Funding</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
                          Message
                        </label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us about your inquiry..."
                          rows={5}
                          required
                          className="border-slate-200"
                        />
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        <p className="text-xs text-slate-600">
                          We use your information only to respond to your inquiry. We never share data with third parties or use it for commercial purposes.
                        </p>
                      </div>

                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
