import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <FaStar
              className="cursor-pointer"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

const RatingPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ratingData = {
      rating,
      comment,
      date: new Date().toISOString(),
    };

    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.push(ratingData);
    localStorage.setItem('ratings', JSON.stringify(ratings));

    navigate('/thank-you');
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">Rate Your Ride</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl w-full space-y-6">
        <div className="mb-4">
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingPage;
