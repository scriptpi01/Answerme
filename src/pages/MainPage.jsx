// src/pages/MainPage.js
import React from 'react';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions.json'; // Adjust the path if necessary
import './MainPage.css';


function MainPage() {
  return (
    <div className="main-page">
      {/* <h1>Answerme</h1> */}
      <div className="card-grid">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
