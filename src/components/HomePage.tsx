'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-light">
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-thin tracking-wider">ARPAN SETHI</Link>
          <div className="space-x-8 text-sm font-light tracking-wide">
            <Link href="/technical-odyssey" className="hover:text-gray-300 transition">Technical Odyssey</Link>
            <Link href="/artistic-ventures" className="hover:text-gray-300 transition">Artistic Ventures</Link>
            <Link href="/literary-explorations" className="hover:text-gray-300 transition">Literary Explorations</Link>
            <Link href="/philosophical-discourse" className="hover:text-gray-300 transition">Philosophical Discourse</Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center bg-black text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-thin mb-6 tracking-wider">Convergence of Intellect & Creativity</h1>
            <p className="text-xl md:text-2xl mb-12 font-extralight max-w-3xl mx-auto">
              Exploring the intersection of technology, art, and philosophy through a lens of perpetual curiosity and innovation.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="/philosophical-discourse" className="border border-white px-8 py-3 rounded-full font-light hover:bg-white hover:text-black transition duration-300">
                Engage in Discourse
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-thin mb-12 text-center tracking-wide">Featured Contemplations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {['Quantum Computing Paradigms', 'Abstract Expressionism in the Digital Age', 'Epistemological Foundations of AI Ethics'].map((topic, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-black p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-light mb-4">{topic}</h3>
                  <p className="text-gray-400 mb-4">An exploration into the depths of {topic.toLowerCase()}, challenging conventional wisdom and proposing novel perspectives.</p>
                  <Link href={`/discourse/${topic.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 hover:underline">
                    Delve Deeper
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-light">© {new Date().getFullYear()} Arpan Sethi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition">Twitter</a>
            <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
            <a href="#" className="hover:text-gray-300 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;