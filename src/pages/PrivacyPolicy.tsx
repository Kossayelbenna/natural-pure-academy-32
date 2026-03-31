import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | NATURAL&PURE"
        description="Privacy Policy for NATURALPURE CORPORATION (EIN: 98-1830546). Learn how we handle your data with full transparency as a nonprofit research organization."
        canonicalUrl="https://natural-and-pure.org/privacy-policy"
      />

      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">
              NATURALPURE CORPORATION · EIN: 98-1830546 · Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                NATURAL&PURE (legally registered as <strong>NATURALPURE CORPORATION</strong>, EIN: 98-1830546), an Arizona nonprofit corporation, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at natural-and-pure.org.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                As a nonprofit organization, we have no commercial incentive to misuse your data. Our mission is scientific education, not data monetization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Research Data & Your Privacy</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What We Collect</h3>
                <p className="text-slate-700 mb-4">
                  We collect minimal personal data. If you use our assessment or quiz features, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Dietary preferences (used only for assessment results, not stored long-term)</li>
                  <li>Health goals (used only for personalized recommendations, not stored long-term)</li>
                  <li>Quiz responses (anonymized data used to improve educational content quality)</li>
                  <li>Device and browser type (standard web analytics)</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What We Do NOT Do</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>We do NOT sell your data</strong> — ever, under any circumstances</li>
                  <li><strong>We do NOT share with third parties</strong> for marketing or commercial purposes</li>
                  <li><strong>We do NOT store personal health information</strong> without explicit consent</li>
                  <li><strong>We do NOT use data for commercial purposes</strong> — we are a nonprofit</li>
                  <li><strong>We do NOT run ads</strong> that use your behavioral data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Personal Data</h3>
              <p className="text-slate-700 leading-relaxed">
                We may collect personal identification information from you only if you voluntarily submit it, such as when contacting us or completing our nutritional quiz. You can always refuse to supply personal information; however, this may prevent you from receiving personalized recommendations.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Non-Personal Data</h3>
              <p className="text-slate-700 leading-relaxed">
                We collect standard web analytics data (browser type, device type, referring URL, pages visited). This data is aggregated and cannot identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>To personalize nutrition assessment results and recommendations</li>
                <li>To improve our educational content and research platform</li>
                <li>To respond to your inquiries and communications</li>
                <li>To support our nonprofit research mission (anonymized, aggregated data only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">AI and Claude API</h2>
              <p className="text-slate-700 leading-relaxed">
                Our platform uses Anthropic's Claude API to generate personalized nutrition guidance. When you use our assessment, your anonymized responses (not personally identifiable) may be processed by Claude to generate recommendations. We do not send personally identifiable information to AI systems. All AI-generated content is presented with citations to peer-reviewed research sources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-slate-700 leading-relaxed">
                We use minimal cookies to operate our service (session cookies for quiz continuity, preference cookies for language settings). We do not use advertising cookies or third-party tracking cookies. You can instruct your browser to refuse all cookies, though some site features may not function correctly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Data Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information. All data transmission is encrypted (HTTPS). We follow healthcare privacy best practices even though we are not legally required to do so, because we believe your health data deserves the highest protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-700 mt-4">
                To exercise any of these rights, contact us at: <a href="mailto:contact@natural-and-pure.org" className="text-blue-600 hover:underline">contact@natural-and-pure.org</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                Our site is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="font-semibold text-slate-900">NATURALPURE CORPORATION</p>
                <p className="text-slate-600 text-sm mt-1">19580 West Indian School Rd, Buckeye, AZ 85396, USA</p>
                <p className="text-slate-600 text-sm">EIN: 98-1830546</p>
                <p className="mt-3">
                  <a href="mailto:contact@natural-and-pure.org" className="text-blue-600 hover:underline text-sm">
                    contact@natural-and-pure.org
                  </a>
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                NATURALPURE CORPORATION is an Arizona nonprofit research organization (EIN: 98-1830546) dedicated to advancing scientific knowledge and education in the field of nutrition through AI.
              </p>
              <p className="mt-4">
                <Link to="/" className="text-blue-600 hover:underline text-sm">
                  ← Return to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
