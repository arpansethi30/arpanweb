'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three'; // Import Mesh from three

// Custom X logo component
const XLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// 3D Background component
const AnimatedSphere = () => {
  const mesh = useRef<Mesh>(null); // Explicitly type the ref as Mesh

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={mesh}>
      <MeshDistortMaterial
        color="#0a192f"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
};

const Background = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
    </Canvas>
  );
};

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-midnight-blue text-white font-light">
      <Background />
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-midnight-blue bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'}`}>
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
        <motion.section 
          className="h-screen flex items-center justify-center"
          style={{ opacity }}
        >
          <div className="text-center px-4 z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-thin mb-6 tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Convergence of Intellect & Creativity
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-12 font-extralight max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exploring the intersection of technology, art, and philosophy through a lens of perpetual curiosity and innovation.
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/philosophical-discourse" className="border border-white px-8 py-3 rounded-full font-light hover:bg-white hover:text-midnight-blue transition duration-300">
                Engage in Discourse
              </Link>
              <Link href="/technical-odyssey" className="border border-white px-8 py-3 rounded-full font-light hover:bg-white hover:text-midnight-blue transition duration-300">
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-thin mb-12 text-center tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Contemplations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {['Quantum Computing Paradigms', 'Abstract Expressionism in the Digital Age', 'Epistemological Foundations of AI Ethics'].map((topic, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl font-light mb-4">{topic}</h3>
                  <p className="text-gray-300 mb-4">An exploration into the depths of {topic.toLowerCase()}, challenging conventional wisdom and proposing novel perspectives.</p>
                  <Link href={`/discourse/${topic.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-300 hover:text-white transition-colors">
                    Delve Deeper
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-900 bg-opacity-30">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-thin mb-12 text-center tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Current Explorations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {['Quantum Algorithm Optimization', 'AI-Driven Artistic Expression'].map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-midnight-blue p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-light mb-4">{project}</h3>
                  <p className="text-gray-300 mb-4">Pushing the boundaries of technology and creativity through innovative approaches and interdisciplinary thinking.</p>
                  <Link href={index % 2 === 0 ? "/technical-odyssey" : "/artistic-ventures"} className="text-blue-300 hover:text-white transition-colors">
                    {index % 2 === 0 ? "Learn More" : "Explore Works"}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-midnight-blue text-white py-12 border-t border-blue-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-thin mb-4">Arpan Sethi</h3>
              <p className="text-gray-300 max-w-md">Innovator, artist, and philosopher exploring the frontiers of technology and creativity.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <XLogo />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Arpan Sethi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
