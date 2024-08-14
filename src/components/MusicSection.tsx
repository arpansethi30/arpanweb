'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';


const MusicSection: React.FC = () => {
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
          Current Playlist
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg shadow-xl"
          >
            <FaMusic className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-light mb-4 text-white">Eclectic Musings</h3>
            <p className="text-gray-400 mb-4">A curated collection of tracks that inspire creativity and deep thought.</p>
            <iframe 
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
              frameBorder="0" 
              height="450" 
              style={{width:'100%',maxWidth:'660px',overflow:'hidden',background:'transparent'}} 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
              src="https://embed.music.apple.com/us/playlist/your-playlist-id-here"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;