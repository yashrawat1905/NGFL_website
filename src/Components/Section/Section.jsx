/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Section.css';
import Form from '../Form/Form';

const Section = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="still-got-questions">
        <div className="still-got-questions-text">
          <p>Still Got Questions?</p>
        </div>
        <div className="still-got-questions-button">
          <button onClick={openForm}>Talk to Experts</button>
        </div>
        {/* Contact Form Modal */}
      {isFormOpen && <Form closeForm={closeForm} />}
      </div>
  )
}

export default Section