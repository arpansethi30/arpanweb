import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPalette, FaMicrochip } from 'react-icons/fa';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, link }) => (
  <motion.div 
    className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Icon className="text-3xl mb-4 text-gray-400" />
    <h3 className="text-xl font-light mb-4">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <Link href={link} className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
      Delve Deeper <span className="ml-2">→</span>
    </Link>
  </motion.div>
);

const FeaturedContemplations: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-thin mb-12 text-center tracking-wide text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Contemplations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Quantum Computing Paradigms"
            description="Exploring the frontiers of computation and its implications on our understanding of reality."
            icon={FaMicrochip}
            link="/discourse/quantum-computing-paradigms"
          />
          <FeatureCard 
            title="Abstract Expressionism in the Digital Age"
            description="Bridging the gap between traditional art forms and emerging digital technologies."
            icon={FaPalette}
            link="/discourse/abstract-expressionism-digital-age"
          />
          <FeatureCard 
            title="Epistemological Foundations of AI Ethics"
            description="Examining the philosophical underpinnings of ethical considerations in artificial intelligence."
            icon={FaLightbulb}
            link="/discourse/ai-ethics-epistemology"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedContemplations;