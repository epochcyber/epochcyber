import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Mail,
  Phone,
  MapPin,
  Shield,
  ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/epochcyber', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/epochcyber', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/epochcyber', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/epochcyber', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/epochcyber', label: 'GitHub' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Cybersecurity Consulting',
    'Threat Assessment',
    'Security Auditing',
    'Incident Response',
    'Penetration Testing',
    'Security Training'
  ];

  const resources = [
    'Security Blog',
    'White Papers',
    'Case Studies',
    'Security Tools',
    'Best Practices',
    'Industry Reports'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Shield className="footer-logo-icon" />
              <span>EpochCyber</span>
            </div>
            <p className="footer-description">
              Your trusted partner in cybersecurity solutions and digital protection. 
              We provide comprehensive security services to safeguard your digital assets.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <IconComponent className="social-icon" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              {resources.map((resource) => (
                <li key={resource}>
                  <span className="footer-link">{resource}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>info@epochcyber.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>123 Cyber Street, Tech City, TC 12345</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest cybersecurity insights.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} EpochCyber. All rights reserved.</p>
              <div className="footer-legal">
                <span className="footer-link">Privacy Policy</span>
                <span className="footer-divider">|</span>
                <span className="footer-link">Terms of Service</span>
                <span className="footer-divider">|</span>
                <span className="footer-link">Cookie Policy</span>
              </div>
            </div>
            <button 
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="scroll-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
