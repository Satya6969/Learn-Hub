import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on the "Register" button in the top right corner. Fill in your details including name, email, and password. Choose your role (Student or Teacher) and complete the registration process.'
        },
        {
          q: 'How do I enroll in a course?',
          a: 'Browse our course catalog, select a course you\'re interested in, and click the "Enroll Now" button. If it\'s a paid course, you\'ll be directed to complete the payment process.'
        },
        {
          q: 'Is there a mobile app?',
          a: 'Currently, LearnHub is available as a web platform accessible from any device with a browser. A dedicated mobile app is in development and will be launched soon.'
        }
      ]
    },
    {
      category: 'Courses & Learning',
      questions: [
        {
          q: 'What types of courses are available?',
          a: 'We offer courses in Programming, Design, Business, Marketing, Photography, Music, Health & Fitness, and Personal Development. Courses range from beginner to advanced levels.'
        },
        {
          q: 'Can I access courses offline?',
          a: 'Course materials must be accessed online. However, you can download certain resources and materials provided by instructors for offline reference.'
        },
        {
          q: 'How long do I have access to a course?',
          a: 'Once you enroll in a course, you have lifetime access to all course materials, including future updates and additions made by the instructor.'
        },
        {
          q: 'Do I get a certificate after completing a course?',
          a: 'Yes! Upon successful completion of a course and passing all required assessments, you\'ll receive a certificate of completion that you can share on LinkedIn and your resume.'
        }
      ]
    },
    {
      category: 'Payments & Refunds',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. All transactions are secure and encrypted.'
        },
        {
          q: 'What is your refund policy?',
          a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, you can request a full refund within 30 days of purchase, no questions asked.'
        },
        {
          q: 'Are there any free courses?',
          a: 'Yes! We offer several free courses across different categories. Browse our course catalog and filter by "Free" to see all available options.'
        }
      ]
    },
    {
      category: 'For Teachers',
      questions: [
        {
          q: 'How can I become an instructor?',
          a: 'Register as a teacher on our platform. Once your account is verified, you can start creating courses using our course creation tools. Your courses will be reviewed before being published.'
        },
        {
          q: 'What do I need to create a course?',
          a: 'You\'ll need expertise in your subject, course content (videos, documents, quizzes), and a compelling course description. Our platform provides tools for uploading and organizing your materials.'
        },
        {
          q: 'How do I earn money as an instructor?',
          a: 'You set your course price, and you earn a percentage of each sale. Payments are processed monthly and can be withdrawn to your preferred payment method.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What are the system requirements?',
          a: 'LearnHub works on any modern browser (Chrome, Firefox, Safari, Edge). We recommend a stable internet connection of at least 5 Mbps for streaming video content.'
        },
        {
          q: 'I\'m having trouble accessing a course. What should I do?',
          a: 'First, try refreshing your browser or clearing your cache. If the problem persists, check your internet connection. If issues continue, contact our support team with details about the problem.'
        },
        {
          q: 'How do I update my profile information?',
          a: 'Log in to your account, go to your dashboard, and click on "Profile Settings". You can update your name, email, password, bio, and profile picture from there.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about LearnHub</p>
      </section>

      <section className="faq-content">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="faq-category">
            <h2 className="faq-category-title">{category.category}</h2>
            <div className="faq-list">
              {category.questions.map((item, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === index;
                
                return (
                  <div key={questionIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                    >
                      <span>{item.q}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="faq-contact">
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Our support team is here to help.</p>
        <a href="/contact" className="faq-contact-btn">Contact Support</a>
      </section>
    </div>
  );
};

export default FAQ;
