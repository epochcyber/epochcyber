import { Target, Award, Clock, Globe } from 'lucide-react';
import './Pages.css';

const About = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>About EpochCyber</h1>
        <p className="page-subtitle">
          Leading the way in cybersecurity innovation and protection
        </p>
      </div>

      <div className="content-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At EpochCyber, we are dedicated to providing comprehensive cybersecurity 
            solutions that protect businesses and individuals from evolving digital threats. 
            Our mission is to create a safer digital world through innovative security 
            technologies and expert guidance.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2020, EpochCyber emerged from the growing need for robust 
            cybersecurity solutions in an increasingly connected world. Our team of 
            experienced professionals combines deep technical expertise with a passion 
            for protecting digital assets.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <Target className="stat-icon" />
            <h3>500+</h3>
            <p>Clients Protected</p>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" />
            <h3>50+</h3>
            <p>Security Certifications</p>
          </div>
          <div className="stat-card">
            <Clock className="stat-icon" />
            <h3>24/7</h3>
            <p>Monitoring Service</p>
          </div>
          <div className="stat-card">
            <Globe className="stat-icon" />
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
