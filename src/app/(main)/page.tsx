import React from 'react';
import Hero from '@/components/home/Hero';
import VerifyCertificate from '@/components/home/VerifyCertificate';
import NewsAndNotices from '@/components/home/NewsAndNotices';
import WorkBasedLearning from '@/components/home/WorkBasedLearning';
import Technologies from '@/components/home/Technologies';
import StatsSection from '@/components/home/StatsSection';
import DirectorMessage from '@/components/home/DirectorMessage';
import OurCenters from '@/components/home/OurCenters';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* 1. Hero Section (with built-in announcements widget) */}
      <Hero />
      
      {/* 2. Certificate Verification prominent card */}
      <VerifyCertificate />
      
      {/* 3. News & Notices Board */}
      <NewsAndNotices />
      
      {/* 4. Internships & WBL */}
      <WorkBasedLearning />
      
      {/* 5. R&D Technologies (Cards) */}
      <Technologies />
      
      {/* 6. Animated Statistics */}
      <StatsSection />
      
      {/* 7. Leadership & Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DirectorMessage />
            <OurCenters />
          </div>
        </div>
      </section>

    </div>
  );
}
