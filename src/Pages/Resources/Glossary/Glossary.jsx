// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Glossary.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer'
import bg from '../../../assets/resources/image.jpg';
import search from '../../../assets/resources/search.png';

const Glossary = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for glossary terms and meanings
  const glossaryData = [
    { term: '3PL', meaning: 'Third-party logistics provider.' },
    { term: 'BOL', meaning: 'Bill of Lading: A document issued by a carrier.' },
    { term: 'EDI', meaning: 'Electronic Data Interchange: The exchange of business documents.' },
    { term: 'SKU', meaning: 'Stock Keeping Unit: A distinct type of item for sale.' },
    { term: 'FIFO', meaning: 'First In, First Out: Inventory management method.' },
    { term: 'LTL', meaning: 'Less than truckload: A shipping service for smaller loads.' },
    { term: 'RFID', meaning: 'Radio Frequency Identification: Technology to identify and track tags.' },
    { term: 'SCM', meaning: 'Supply Chain Management: Overseeing the flow of goods.' },
    { term: 'WMS', meaning: 'Warehouse Management System: Software to manage warehouse operations.' },
  ];

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(glossaryData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = glossaryData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="glossary-container">
        <div className="image-container">
          <img src={bg} alt="Glossary Background" className="background-image" />
          <div className="overlay">
            <h1 className="glossary-title">Glossary</h1>
            <div className="search-bar-container">
              <input type="text" className="search-bar" placeholder="Search..." />
              <img src={search} alt="Search Icon" className="search-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Separate section for the title */}
      <div className="resource-title-container">
        <h2 className="resource-title">
          Your Go-To Resource for Understanding Supply Chain Glossaries and Key Logistics Terms
        </h2>
      </div>

      {/* Glossary Cards Section */}
      <div className="cards-container">
        {currentItems.map((item, index) => (
          <div key={index} className="card">
            <h3 className="term-title">{item.term}</h3>
            <p className="term-meaning">{item.meaning}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="prev-next" onClick={() => handlePageClick(currentPage - 1)}>
          Previous
        </span>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <span
            key={pageNumber + 1}
            className={`page-number ${pageNumber + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1}
          </span>
        ))}
        <span className="prev-next" onClick={() => handlePageClick(currentPage + 1)}>
          Next
        </span>
      </div>
      <Footer/>
    </div>
  );
};

export default Glossary;
