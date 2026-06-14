import { motion } from 'framer-motion';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Delivery <span className="text-gradient">Record</span></h2>
          <p className="section-subtitle">Hands-on development and technical leadership across Shopify Plus, headless storefronts, and custom commerce workflows.</p>
        </motion.div>

        <div className="timeline" aria-label="Professional experience">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="period">{item.period}</span>
                <h3 className="company">{item.company}</h3>
                <h4 className="role">{item.role}</h4>
                <p className="description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
