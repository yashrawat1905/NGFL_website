/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Value.css';

const Value = ({ header, values }) => {
  return (
    <section className="value-section">
      <p className="value-header">
        {header}
      </p>
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
