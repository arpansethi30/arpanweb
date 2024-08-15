'use client';

import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedContemplations from './FeaturedContemplations';
import LatestInsights from './LatestInsights';
import LatestTweets from './LatestTweets';
import MusicSection from './MusicSection';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-light">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedContemplations />
        <LatestInsights />
        <LatestTweets />
        <MusicSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;