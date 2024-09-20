// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FAquestions.css';

const FAquestions = () => {
  const [activeSection, setActiveSection] = useState('General');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = {
    General: [
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'How can I track my order?', answer: 'You can track your order by...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
    ],
    '3PL': [
      { question: 'What is 3PL?', answer: '3PL stands for Third-Party Logistics...' },
      { question: 'How does 3PL work?', answer: '3PL works by...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
    ],
    Warehousing: [
      { question: 'What warehousing services do you offer?', answer: 'We offer...' },
      { question: 'Can I store products long-term?', answer: 'Yes, you can store products...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
      { question: 'What is your return policy?', answer: 'Our return policy is...' },
    ],
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setExpandedQuestion(null);
  };

  const handleQuestionClick = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq-container container">
      <p className="faq-heading">Got <strong>Questions?</strong> We’ve Got <strong>Answers!</strong></p>
      <div className="faq-navbar">
        {Object.keys(faqData).map((section) => (
          <button
            key={section}
            className={`faq-navbar-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="faq-content">
        {faqData[activeSection].map((item, index) => (
          <div key={index} className="faq-question-card">
            <div className="faq-question" onClick={() => handleQuestionClick(index)}>
              {item.question}
              <span className="faq-accordion-button">
                {expandedQuestion === index ? '-' : '+'}
              </span>
            </div>
            <div className={`faq-answer ${expandedQuestion === index ? 'expanded' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAquestions;
