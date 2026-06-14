import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
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
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a 
                      href={project.link} 
                      className="project-link"
                      aria-label={`Open ${project.title}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="project-link"
                      aria-label={`${project.title} source code`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
