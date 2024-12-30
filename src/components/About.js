import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      
      <motion.div
        className="about-content"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <p>
          Hello! I'm <strong>Kranthi Kumar</strong>, a passionate full-stack developer with expertise in the PERN stack (PostgreSQL, Express, React, Node.js) and Web3 technologies. 
          I specialize in building modern, scalable web applications and decentralized apps (DApps). 
          With a strong problem-solving mindset and a focus on delivering seamless user experiences, I thrive on creating solutions that address real-world challenges.
        </p>
        <p>
          My journey began with a strong foundation in problem-solving and client-facing roles, which I later transitioned into full-stack development. 
          Since then, I’ve been honing my skills in JavaScript, React, and Node.js, while also diving into the exciting world of blockchain and Ethereum development. 
          I am always eager to learn new technologies and stay on top of the latest trends in web development and blockchain space.
        </p>
        <p>
          Outside of coding, I enjoy exploring new tech innovations, collaborating with like-minded individuals, and constantly pushing the boundaries of what's possible with code.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
