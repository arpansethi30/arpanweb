'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter } from 'react-icons/fa';

interface Tweet {
  id: string;
  text: string;
  date: string;
}

const TweetCard: React.FC<Tweet> = ({ text, date }) => (
  <motion.div
    className="bg-gray-900 p-4 rounded-lg mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <p className="text-gray-300 mb-2">{text}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </motion.div>
);

const LatestTweets: React.FC = () => {
  // This is mock data. Replace with real Twitter API data when implemented.
  const tweets: Tweet[] = [
    {
      id: '1',
      text: "Just launched my new portfolio website! Check it out and let me know what you think. #WebDev #PortfolioWebsite",
      date: "2 hours ago"
    },
    {
      id: '2',
      text: "Exploring the intersection of quantum computing and machine learning. The possibilities are mind-boggling! #QuantumComputing #MachineLearning",
      date: "1 day ago"
    },
    {
      id: '3',
      text: "Thoughts on the ethical implications of AI in creative industries? Working on a new article about this. #AIEthics #CreativeTech",
      date: "3 days ago"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-thin mb-12 text-center tracking-wide text-white flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaTwitter className="mr-4 text-blue-400" />
          Latest Tweets
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} {...tweet} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Follow me on Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestTweets;