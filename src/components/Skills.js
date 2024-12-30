import React from 'react';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Web3', 'DApps'];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <motion.ul
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
