import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface MedicalDisclaimerProps {
  variant?: 'banner' | 'inline' | 'compact';
  className?: string;
}

/**
 * MedicalDisclaimer — Required for health/nutrition domains.
 * Compliance: Google Health E-E-A-T, DGCCRF, CE 1924/2006
 */
const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({
  variant = 'banner',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <p className={`text-xs text-slate-500 italic ${className}`}>
        ⚕️ Educational purposes only — not a substitute for professional medical advice.
      </p>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl ${className}`}>
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Medical Disclaimer:</strong> The information provided on this platform is for educational
          purposes only. It is not intended as medical advice and does not replace consultation with a
          qualified healthcare professional. Always consult your doctor before making changes to your diet
          or supplement regimen.
        </p>
      </div>
    );
  }

  // default: banner
  return (
    <div className={`w-full bg-amber-50 border-t border-b border-amber-200 py-3 px-4 ${className}`}>
      <div className="container mx-auto flex items-center gap-3 max-w-5xl">
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />
        <p className="text-xs text-amber-800 leading-snug">
          <strong>Educational Content Only.</strong>{' '}
          The information on this platform is for educational purposes and does not constitute medical
          advice. It is not intended to diagnose, treat, cure, or prevent any disease or health condition.
          Always consult a qualified healthcare professional before modifying your diet or supplementation.
          Individual results may vary based on personal health conditions.
        </p>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
