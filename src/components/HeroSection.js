import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Full-Stack Developer | PERN Stack | Web3 Enthusiast</p>
    </motion.div>
  );
};

export default HeroSection;
