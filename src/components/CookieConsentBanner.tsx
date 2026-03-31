import React from 'react';
import CookieConsent from "react-cookie-consent";

export const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline Non-Essential"
      enableDeclineButton
      cookieName="natural-pure-gdpr-consent"
      style={{ background: "#2B373B", alignItems: "center" }}
      buttonStyle={{ backgroundColor: "#10b981", color: "white", fontSize: "14px", borderRadius: "6px", fontWeight: "bold" }}
      declineButtonStyle={{ backgroundColor: "transparent", border: "1px solid #94a3b8", color: "#f1f5f9", fontSize: "14px", borderRadius: "6px" }}
      expires={150}
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-white text-base content-center">Respecting Your Privacy</h4>
        <p className="text-sm text-slate-200">
          NATURAL&PURE uses essential cookies to ensure our site works safely. We also use minimal, anonymous analytics (Plausible) to understand how our research tools are utilized. No personal data is sold or tracked for advertising.
        </p>
      </div>
    </CookieConsent>
  );
};
