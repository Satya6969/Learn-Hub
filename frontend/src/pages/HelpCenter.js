import React from 'react';
import { Search, Book, MessageCircle, FileText, Video, Mail } from 'lucide-react';
import './HelpCenter.css';

const HelpCenter = () => {
  const categories = [
    {
      icon: <Book size={32} />,
      title: 'Getting Started',
      description: 'Learn the basics of using LearnHub',
      articles: 12
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Account & Settings',
      description: 'Manage your account and preferences',
      articles: 8
    },
    {
      icon: <FileText size={32} />,
      title: 'Courses & Enrollment',
      description: 'Everything about courses and learning',
      articles: 15
    },
    {
      icon: <Video size={32} />,
      title: 'Payments & Billing',
      description: 'Payment methods and invoices',
      articles: 6
    }
  ];

  const popularArticles = [
    'How do I enroll in a course?',
    'How to reset my password?',
    'What payment methods are accepted?',
    'How do I contact my instructor?',
    'Can I get a refund?',
    'How to track my progress?'
  ];

  return (
    <div className="help-center">
      <section className="help-hero">
        <h1>How can we help you?</h1>
        <p>Search our knowledge base or browse categories below</p>
        <div className="help-search">
          <Search size={20} />
          <input type="text" placeholder="Search for help articles..." />
        </div>
      </section>

      <section className="help-content">
        <h2>Browse by Category</h2>
        <div className="help-categories">
          {categories.map((category, index) => (
            <div key={index} className="help-category-card">
              <div className="help-category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="help-article-count">{category.articles} articles</span>
            </div>
          ))}
        </div>

        <div className="help-popular">
          <h2>Popular Articles</h2>
          <ul className="help-article-list">
            {popularArticles.map((article, index) => (
              <li key={index}>
                <FileText size={18} />
                <span>{article}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="help-contact">
          <Mail size={48} />
          <h2>Still need help?</h2>
          <p>Our support team is here to assist you</p>
          <a href="/contact" className="help-contact-btn">Contact Support</a>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
