import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const FaqPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1500 });

    // Load existing questions from local storage
    const storedQuestions = JSON.parse(localStorage.getItem('faqQuestions')) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const updatedQuestions = [
      ...questions,
      {
        question: newQuestion,
        answer: 'Your question has been received. We will get back to you shortly.',
      },
    ];

    setQuestions(updatedQuestions);
    localStorage.setItem('faqQuestions', JSON.stringify(updatedQuestions));
    setNewQuestion('');
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <form onSubmit={handleQuestionSubmit} className="space-y-4" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 dark:text-gray-200">Ask a Question:</label>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter your question"
              required
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
          >
            Submit Question
          </button>
        </form>
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-xl font-semibold">Questions & Answers</h3>
          {questions.length > 0 ? (
            questions.map((qa, index) => (
              <div key={index} className="border-b border-gray-300 dark:border-gray-600 pb-4 mb-4">
                <p className="text-gray-700 dark:text-gray-200"><strong>Q:</strong> {qa.question}</p>
                <p className="text-gray-700 dark:text-gray-200"><strong>A:</strong> {qa.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-200">No questions have been asked yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
