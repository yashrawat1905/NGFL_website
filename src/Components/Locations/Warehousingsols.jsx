/* eslint-disable no-unused-vars */
import React from 'react';
import './Warehousingsols.css';
import sol1 from '../../assets/locations/sol1.jpg'

const Warehousingsols = () => {
  const cards = [
    {
      title: 'Warehouse 1',
      description: 'Description for Warehouse 1',
      image: sol1
    },
    {
      title: 'Warehouse 2',
      description: 'Description for Warehouse 2',
      image: sol1
    },
    {
      title: 'Warehouse 3',
      description: 'Description for Warehouse 3',
      image: sol1
    }
  ];

  return (
    <div className="warehousing-container">
      <h2>Our Warehousing Solutions</h2>
      <div className="sol-cards-container">
        {cards.map((card, index) => (
          <div key={index} className="sol-card">
            <div className="sol-card-image" style={{ backgroundImage: `url(${card.image})` }}></div>
            <div className="sol-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehousingsols;
