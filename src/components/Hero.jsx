import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Rocket, ShoppingBag, Sparkles, Zap } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-glow-blob hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-blob hero-glow-2" aria-hidden="true" />

      <div className="hero-shell">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="badge">
              <Zap size={14} className="icon-green" /> 
              Shopify Solutions & Architecture
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Provide High-Performance <span className="text-gradient">Shopify Solutions</span>
          </motion.h1>

          <motion.div 
            className="hero-specialties"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className="specialty-pill">
              <Sparkles size={14} className="icon-accent" />
              Custom Themes
            </span>
            <span className="specialty-pill">
              <Code size={14} className="icon-accent" />
              Headless Hydrogen
            </span>
            <span className="specialty-pill">
              <Rocket size={14} className="icon-accent" />
              Shopify Plus & Scaling
            </span>
          </motion.div>

          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {data?.tagline || "We design, build, and scale world-class Shopify stores and headless e-commerce architectures that turn traffic into lasting revenue."}
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <motion.a 
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Work</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <ShoppingBag size={20} />
          </div>
          <div className="stat-text">
            <strong>100+ Stores</strong>
            <span>Launched & Optimized</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <Zap size={20} />
          </div>
          <div className="stat-text">
            <strong>99+ Speed</strong>
            <span>Performance & Conversion</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <Code size={20} />
          </div>
          <div className="stat-text">
            <strong>Custom Liquid & React</strong>
            <span>Tailored Architecture</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <Globe size={20} />
          </div>
          <div className="stat-text">
            <strong>Global Reach</strong>
            <span>Worldwide E-Commerce</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
