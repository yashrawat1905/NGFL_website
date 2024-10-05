// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FAquestions.css';

const FAquestions = () => {
  const [activeSection, setActiveSection] = useState('General');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = {
    'General': [
      { question: 'What sets Nagarkot Forwarders apart from other 3PL and warehousing providers?', answer: 'Nagarkot Forwarders combines industry-specific expertise, and a customer-first approach to provide tailored logistics solutions. Our deep experience in sectors like automotive, healthcare, and more ensures that your supply chain is managed efficiently and securely.' },
      { question: 'How do I get started with Nagarkot Forwarders services?', answer: 'You can get in touch with our team through our website or contact us directly via phone or email. We will discuss your logistics needs and provide customized solutions based on your specific requirements.' },
      { question: 'Can I integrate my existing systems with Nagarkot Forwarders technology?', answer: 'Yes, we offer seamless integration with your existing ERP or WMS systems, allowing for real-time data flow and improved visibility across your supply chain.'},
      { question: 'How do you ensure the quality and reliability of your services?', answer: 'We follow strict quality control processes, including regular audits, real-time performance tracking, and continuous improvements to ensure that our logistics and warehousing services consistently meet the highest standards of reliability.' },
      { question: 'What is the pricing structure for your 3PL and warehousing services?', answer: 'Our pricing is based on the specific needs of your business. Factors such as volume, storage requirements, value-added services, and the length of storage are taken into consideration. Please contact us for a customized quote.'},
    ],

    '3PL': [
      { question: 'What services does Nagarkot Forwarders provide under 3PL?', answer: 'Nagarkot Forwarders offers a range of 3PL services, including transportation, order fulfillment, inventory management, and supply chain consultation. We specialize in handling industry-specific logistics for sectors like automotive, healthcare, electronics, and retail.' },
      { question: 'How can partnering with a 3PL provider benefit my business?', answer: 'Partnering with Nagarkot Forwarders can help you reduce logistics costs, improve efficiency, scale operations quickly, and focus on core business activities while we manage your supply chain needs.' },
      { question: 'What industries does Nagarkot Forwarders cater to for 3PL solutions?', answer: 'We cater to a variety of industries including automotive, healthcare, electronics, retail, lifestyle, F&B and more. Our tailored solutions ensure your unique logistics needs are met efficiently.' },
      { question: 'Can Nagarkot Forwarders handle international shipments and customs processes?', answer: 'Yes. In fact, we specialize in international door to door shipments & associated documentation, offering in-house Customs Clearance and Freight Forwarding services. Please consult us to discuss your exact requirements.' },
      { question: 'How do you ensure the security and transparency of my shipments?', answer: 'We use real-time tracking, secured transportation methods, and regular updates to ensure full transparency and the security of your goods throughout the entire supply chain process.' },
    ],

    'Warehousing': [
      { question: 'What types of goods can be stored in your warehouses?', answer: 'Our warehouses are equipped to store a wide range of goods, including automotive parts, electronics, healthcare products, retail goods, and more, with specific handling for sensitive items like pharmaceuticals. Haz cargo / chemical storage requirements need to be discussed on case to case basis' },
      { question: 'Where are your warehouses located, and do you offer multi-location warehousing solutions?', answer: 'Our warehouses are strategically located across key logistics hubs in India, and we offer multi-location warehousing solutions to ensure efficient distribution and storage.' },
      { question: 'What security measures do you have in place at your warehouses?', answer: 'All our warehouses are equipped with 24/7 surveillance, CCTV cameras, access control, security guards, and fire safety systems to ensure the utmost security of your stored goods.' },
      { question: 'Do you provide any value-added services ?', answer: 'Yes, we offer labeling, kitting, packaging, and assembly to streamline your supply chain and improve product readiness for distribution. We can additionally train our manpower on your SOPs for you to outsource other similar VAS to us.' },
      { question: 'How does Nagarkot Forwarders handle seasonal demand and fluctuating inventory?', answer: 'We offer flexible warehousing solutions that scale according to your business needs, ensuring that you can efficiently handle seasonal demand and fluctuating inventory levels without additional overhead.' },
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
