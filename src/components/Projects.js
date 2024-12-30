import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: 'WorkFlow Pro', description: 'Real-time ERP Task Management App' },
  { title: 'E-Commerce Platform', description: 'Real-time Inventory & Customer Chat' },
  { title: 'Decentralized Voting System', description: 'Blockchain-based Voting App' },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <motion.div
        className="project-cards"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
