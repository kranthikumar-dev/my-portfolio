import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <h1>Hi, I'm Kranthi Kumar 👋</h1>
      <motion.p 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full-Stack Developer | PERN Stack | Web3 & Blockchain Enthusiast
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
