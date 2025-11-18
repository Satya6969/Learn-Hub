import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-icon">
              <Mail size={28} />
            </div>
            <h3>Email Us</h3>
            <p>support@learnhub.com</p>
            <p className="contact-detail">We'll respond within 24 hours</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <Phone size={28} />
            </div>
            <h3>Call Us</h3>
            <p>+91 (555) 123-4567</p>
            <p className="contact-detail">Mon-Fri 9am to 6pm IST</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <MapPin size={28} />
            </div>
            <h3>Visit Us</h3>
            <p>ACADEMIC HALL</p>
            <p className="contact-detail">Noida International University</p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form-header">
            <MessageCircle size={32} />
            <h2>Send us a Message</h2>
            <p>Fill out the form below and our team will get back to you shortly</p>
          </div>

          {submitted && (
            <div className="contact-success">
              <Send size={24} />
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
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
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-faq-link">
          <Clock size={24} />
          <h3>Looking for quick answers?</h3>
          <p>Check out our FAQ page for instant answers to common questions</p>
          <a href="/faq" className="faq-link-btn">Visit FAQ</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
