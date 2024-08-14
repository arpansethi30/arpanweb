import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-thin mb-6 tracking-wider">
          Convergence of Intellect & Creativity
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-extralight max-w-3xl mx-auto">
          Exploring the intersection of technology, art, and philosophy through a lens of perpetual curiosity and innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/philosophical-discourse" className="border border-white px-8 py-3 rounded-full font-light hover:bg-white hover:text-black transition duration-300">
            Engage in Discourse
          </Link>
          <Link href="/technical-odyssey" className="border border-white px-8 py-3 rounded-full font-light hover:bg-white hover:text-black transition duration-300">
            Explore Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;