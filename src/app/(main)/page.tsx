import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import WorkBasedLearning from '@/components/home/WorkBasedLearning';
import Technologies from '@/components/home/Technologies';
import Glimpses from '@/components/home/Glimpses';
import DirectorMessage from '@/components/home/DirectorMessage';
import OurCenters from '@/components/home/OurCenters';
import QuickLinks from '@/components/home/QuickLinks';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSlider />
      
      {/* WBL Section */}
      <WorkBasedLearning />
      
      {/* Horizontal Tech Bar */}
      <Technologies />
      
      {/* Glimpses & 2x3 Grid */}
      <Glimpses />
      
      {/* Director Message & Our Centers (50/50 Split) */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex">
          <DirectorMessage />
        </div>
        <div className="w-full md:w-1/2 flex">
          <OurCenters />
        </div>
      </section>
      
      {/* 3-Column Links & Updates */}
      <QuickLinks />
    </div>
  );
}
