import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import './Pages.css';

const Home = () => {
  return (
    <div className="page">
      <div className="hero-section">
        <h1>Welcome to EpochCyber</h1>
        <p className="hero-subtitle">
          Your trusted partner in cybersecurity solutions and digital protection
        </p>
        <button className="cta-button">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Shield className="feature-icon" />
            <h3>Advanced Security</h3>
            <p>State-of-the-art cybersecurity solutions to protect your digital assets</p>
          </div>
          <div className="feature-card">
            <Zap className="feature-icon" />
            <h3>Fast Response</h3>
            <p>Quick incident response and 24/7 monitoring for your peace of mind</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Expert Team</h3>
            <p>Certified cybersecurity professionals with years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
