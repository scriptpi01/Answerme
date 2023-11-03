// src/components/QuestionCard.js
import React, { useState } from 'react';
import Modal from './Modal';
import './QuestionCard.css';

function QuestionCard({ question }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Answer for question ${question.id}: ${answer}`);
    setAnswer('');
    handleCloseModal();
  };

  return (
    <div className="question-card" onClick={handleOpenModal}>
      {/* Update the src attribute to use question.imageUrl */}
      <img src={question.imageUrl} alt={question.title} />
      <h3>{question.title}</h3>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-header">
          <h2>Question</h2>
          <button onClick={handleCloseModal} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <p className="question-text">{question.detail}</p>
          <form onSubmit={handleSubmit} className="answer-form">
            <textarea
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Type your answer here..."
              rows="3"
            />
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default QuestionCard;
