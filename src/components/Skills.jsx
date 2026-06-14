import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-kicker">Commerce Stack</div>
          <h2 className="section-title">Technical <span className="text-gradient">Systems</span></h2>
          <p className="section-subtitle">Tools and architecture choices focused on fast storefronts, maintainable themes, and reliable Shopify integrations.</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                borderColor: 'var(--accent-primary)',
                boxShadow: '0 0 20px rgba(149, 255, 0, 0.1)'
              }}
            >
              <div className="skill-category">{skill.category}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
