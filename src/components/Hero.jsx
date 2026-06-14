import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, ImagePlus, ShoppingBag, Store, Zap } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  const initials = data.name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            <Zap size={14} className="icon-green" /> 
            Shopify Portfolio
          </span>
          <h1 className="hero-title">
            {data.name.split(' ').map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="word"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="hero-role">{data.role}</p>
          <p className="hero-specialty">{data.specialty}</p>
          <p className="hero-tagline">{data.tagline}</p>

          <div className="hero-actions">
            <motion.a 
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          aria-label={`${data.name} profile photo`}
        >
          <div className="portrait-card">
            <div className="portrait-frame">
              {data.photo ? (
                <img src={data.photo} alt={data.name} className="portrait-image" />
              ) : (
                <div className="portrait-placeholder">
                  <ImagePlus size={34} />
                  <span>{initials}</span>
                </div>
              )}
            </div>

          </div>

          <div className="profile-summary">
            <div className="summary-icon">
              <Store size={20} />
            </div>
            <div>
              <span>Specialized in</span>
              <strong>Shopify Plus, Liquid, Hydrogen</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="stat-item">
          <ShoppingBag size={20} />
          <span>100+ Stores Launched</span>
        </div>
        <div className="stat-item">
          <Code size={20} />
          <span>10k+ Lines of Liquid</span>
        </div>
        <div className="stat-item">
          <Globe size={20} />
          <span>Global Clients</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
