import { Shield, Lock, Eye, AlertTriangle, Database, Cloud } from 'lucide-react';
import './Pages.css';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention systems to identify and neutralize cyber threats before they impact your business.',
      features: ['Real-time monitoring', 'AI-powered analysis', 'Automated response']
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and strengthen your cybersecurity posture.',
      features: ['Penetration testing', 'Vulnerability assessment', 'Compliance auditing']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring services to ensure continuous protection of your digital infrastructure.',
      features: ['SOC services', 'Incident response', 'Threat intelligence']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid incident response services to minimize damage and restore operations quickly after a security breach.',
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Comprehensive data protection solutions to safeguard your sensitive information and ensure compliance.',
      features: ['Data encryption', 'Backup solutions', 'Privacy compliance']
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Specialized cloud security services to protect your cloud infrastructure and applications.',
      features: ['Cloud assessment', 'Configuration management', 'Access control']
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p className="page-subtitle">
          Comprehensive cybersecurity solutions tailored to your needs
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="service-card">
              <div className="service-header">
                <IconComponent className="service-icon" />
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
