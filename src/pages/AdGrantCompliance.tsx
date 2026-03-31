
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplianceAuditDashboard from '@/components/ComplianceAuditDashboard';

const AdGrantCompliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Google Ad Grant Compliance | NATURALPURE CORPORATION</title>
        <meta name="description" content="Monitoring and ensuring compliance with Google Ad Grant requirements for NATURALPURE CORPORATION, a non-profit nutrition research organization." />
        <meta name="keywords" content="Google Ad Grant, non-profit, compliance, NATURALPURE CORPORATION" />
        <meta name="organization-type" content="nonprofit" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 py-8">
        <ComplianceAuditDashboard />
      </main>
      
      <Footer />
    </div>
  );
};

export default AdGrantCompliance;
