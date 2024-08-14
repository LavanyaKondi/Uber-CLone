import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccessPage = () => {
  const { state } = useLocation(); // Get state from location
  const navigate = useNavigate();

  // Default values if state is undefined
  const {
    pickupLocation = 'Not specified',
    dropoffLocation = 'Not specified',
    selectedCar = { name: 'Not selected', price: '0' },
    distance = '0',
    duration = '0'
  } = state || {};

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Booking Successful!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Your booking has been confirmed. We have sent a confirmation email with the details.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Booking Details:</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Pickup Location: <strong>{pickupLocation}</strong></li>
            <li>Dropoff Location: <strong>{dropoffLocation}</strong></li>
            <li>Selected Car: <strong>{selectedCar.name}</strong></li>
            <li>Price: <strong>${selectedCar.price}</strong></li>
            <li>Distance: <strong>{distance}</strong></li>
            <li>Estimated Duration: <strong>{duration}</strong></li>
          </ul>
        </div>
        <button
          onClick={() => navigate('/userpage')}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
