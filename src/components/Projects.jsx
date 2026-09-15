import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-kicker">Case Studies</div>
          <h2 className="section-title">Selected <span className="text-gradient">Builds</span></h2>
          <p className="section-subtitle">Focused storefront and app work for brands that need speed, stability, and a cleaner buying path.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              aria-label={`Open ${project.title} live store`}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-link-badge">
                    <span>Visit Store</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <ExternalLink size={16} className="project-title-icon" />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
