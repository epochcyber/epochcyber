import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p className="page-subtitle">
          Get in touch with our cybersecurity experts
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Ready to secure your digital assets? Contact our team of cybersecurity 
            experts for a consultation or to learn more about our services.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@epochcyber.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>123 Cyber Street<br />Security City, SC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" />
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
