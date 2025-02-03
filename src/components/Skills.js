import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "1. HTML", "2. CSS", "3. JavaScript", "4. React", 
  "5. Node.js", "6. Express.js", "7. PostgreSQL", "8. Sequelize",
  "9. CORS", "10. Bcrypt.js", "11. JSON Web Token (JWT)",
  "12. Web3.js", "13. Ethers.js", "14. DApps", "15. Blockchain", "16. Smart Contracts"
];

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
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
