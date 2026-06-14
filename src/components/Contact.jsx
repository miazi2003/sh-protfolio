import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import './Contact.css';

const Contact = ({ socials }) => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@example.com';
  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus('error');
      setStatusMessage('Email service is not configured yet.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            to_email: contactEmail,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('EmailJS request failed');
      }

      setStatus('success');
      setStatusMessage('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('Message failed to send. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-kicker">Available for Projects</div>
            <h2 className="contact-title">Let's build a faster <span className="text-gradient">Shopify store</span>.</h2>
            <p className="contact-description">
              Whether it is a headless Shopify build, custom theme, or scaling your e-commerce business, I can help turn the roadmap into clean, production-ready work.
            </p>
            
            <div className="social-links">
              <motion.a target="_blank" href={socials.github} aria-label="Github" whileHover={{ y: -5, color: 'var(--accent-primary)' }}><Github /></motion.a>
              <motion.a target="_blank" href={socials.linkedin} aria-label="LinkedIn" whileHover={{ y: -5, color: 'var(--accent-primary)' }}><Linkedin /></motion.a>
             
            </div>

            <div className="email-link">
              <Mail size={16} />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-action"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your Shopify project"
                  rows="5"
                  required
                />
              </label>

              <button className="contact-button" type="submit" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>

              {statusMessage && (
                <p className={`form-status ${status}`}>{statusMessage}</p>
              )}
            </form>
          </motion.div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} All Right Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
