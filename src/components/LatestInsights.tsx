import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface InsightProps {
  title: string;
  date: string;
  excerpt: string;
}

const InsightCard: React.FC<InsightProps> = ({ title, date, excerpt }) => (
  <motion.div 
    className="border-b border-gray-800 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-lg font-light mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-500 mb-2">{date}</p>
    <p className="text-gray-400">{excerpt}</p>
    <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center mt-2">
      Read More <span className="ml-2">→</span>
    </Link>
  </motion.div>
);

const LatestInsights: React.FC = () => {
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
          Latest Insights
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <InsightCard 
            title="The Convergence of Quantum Computing and Machine Learning"
            date="August 15, 2024"
            excerpt="Exploring the potential synergies between quantum algorithms and neural networks, and their implications for the future of AI."
          />
          <InsightCard 
            title="Digital Brushstrokes: The Evolution of AI-Generated Art"
            date="August 8, 2024"
            excerpt="Analyzing the impact of generative adversarial networks on the art world and the philosophical questions they raise about creativity and authorship."
          />
          <InsightCard 
            title="Ethical Implications of Brain-Computer Interfaces"
            date="August 1, 2024"
            excerpt="Delving into the moral and societal considerations surrounding direct neural interfaces and their potential to reshape human cognition and identity."
          />
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;