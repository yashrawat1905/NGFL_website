// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Value.css';

// eslint-disable-next-line react/prop-types
const Value = ({ values }) => {
  return (
    <section className="value-section">
      <h1 className="value-header">Values that Define Us</h1>
      <div className="value-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <h2 className="value-title">{value.title}</h2>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
