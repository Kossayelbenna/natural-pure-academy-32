import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-white">NATURAL</span>
              <span className="text-xl font-bold text-emerald-400">&</span>
              <span className="text-xl font-bold text-white">PURE</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A nonprofit research organization democratizing evidence-based nutrition education through artificial intelligence. 100% free, 100% open, 100% science.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contact@natural-and-pure.org"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Email founder"
              >
                <Mail className="h-4 w-4" />
                contact@natural-and-pure.org
              </a>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-900/40 border border-emerald-700/50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-300 font-medium">Arizona Nonprofit Corporation</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Research", path: "/research" },
                { name: "Quiz", path: "/quiz" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-use" },
                { name: "Accessibility", path: "/accessibility" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Strip */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">
                NATURALPURE CORPORATION
              </p>
              <p className="text-xs text-slate-500">
                EIN: <span className="text-slate-400 font-mono">98-1830546</span> &nbsp;|&nbsp;
                Entity ID: <span className="text-slate-400 font-mono">23750798</span> &nbsp;|&nbsp;
                Arizona Nonprofit Corporation
              </p>
              <p className="text-xs text-slate-600">
                19580 West Indian School Rd, Buckeye, AZ 85396 &nbsp;|&nbsp;
                All content is for educational and research purposes only.
              </p>
            </div>
            <p className="text-xs text-slate-600 shrink-0">
              © {currentYear} NATURALPURE CORPORATION. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;