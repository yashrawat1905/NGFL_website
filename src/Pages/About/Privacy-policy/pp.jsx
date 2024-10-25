/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './pp.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const pp = () => {
  return (
    <div>
        <Navbar/>
    
    <div className="privacy-policy-container">
      <h1 className="title">Privacy Policy</h1>
      
      <section className="section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Nagarkot Forwarders Private Limited ("we," "our," "us"). This Privacy Policy outlines how we collect, use, and protect your information when you visit our website and digital / social media channels. We are dedicated to safeguarding your privacy and ensuring that your personal data is handled responsibly.
        </p>
      </section>

      <section className="section">
        <h2>2. Information We Collect</h2>
        <h3>Personal Information:</h3>
        <p>
          This includes any information you provide directly, such as your name, email address, phone number, and other details you provide when contacting us or signing up for our services.
        </p>
        <h3>Non-Personal Information:</h3>
        <p>
          This includes data collected automatically when you visit our site, such as your IP address, browser type, device information, and browsing behavior. This data helps us understand your interaction with our website and improve your experience.
        </p>
      </section>

      <section className="section">
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li><strong>To Improve Our Services:</strong> Non-personal data helps us understand user behavior and preferences, allowing us to enhance our website and services.</li>
          <li><strong>To Communicate with You:</strong> Personal information may be used to send you updates, respond to inquiries, or provide customer support.</li>
          <li><strong>To Target and Measure Ads:</strong> We use data to deliver personalized advertisements through Meta's advertising platform, helping us reach audiences who might be interested in our products or services.</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. However, we may share your data with the following parties under specific circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website or conducting business, such as hosting services, email providers, and payment processors.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, or in response to valid requests by public authorities.</li>
        </ul>
      </section>

      <section className="section">
        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect non-personal data and enhance your experience on our site. Cookies are small files stored on your device that help us remember your preferences and analyze site traffic. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="section">
        <h2>6. Your Choices</h2>
        <ul>
          <li><strong>Access and Update Your Information:</strong> You can review and update your personal information by contacting us at info AT nagarkot DOT co DOT in.</li>
          <li><strong>Opt-Out of Marketing Communications:</strong> If you no longer wish to receive marketing communications, you can opt out by following the unsubscribe instructions in those emails.</li>
        </ul>
      </section>

      <section className="section">
        <h2>7. Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration. However, no security system is completely impenetrable, and we cannot guarantee the absolute security of your data.
        </p>
      </section>

      <section className="section">
        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the revised policy on our website. Your continued use of our site following the posting of changes constitutes your acceptance of such changes.
        </p>
      </section>

      <section className="section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <address>
          Nagarkot Forwarders Private Limited <br />
          info AT nagarkot DOT co DOT in <br />
          Chembur, Mumbai 400071
        </address>
        <p>Thank you for trusting Nagarkot Forwarders Private Limited. We value your privacy and are committed to safeguarding your information.</p>
      </section>
    </div>
    <Footer/>
    </div>
  );
};


export default pp