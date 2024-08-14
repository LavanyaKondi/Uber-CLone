import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">Thank You!</h1>
      <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Your feedback is valuable to us.</p>
      <Link
        to="/"
        className="py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
