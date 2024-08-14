import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import {
  FaQuestionCircle,
  FaPhone,
  FaBook,
  FaCreditCard,
  FaShieldAlt,
  FaTimesCircle,
} from 'react-icons/fa';

const Help = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2
          className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200"
          data-aos="fade-up"
        >
          Help & Support
        </h2>
        <p
          className="text-gray-700 dark:text-gray-200"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Welcome to the help section. Here you can find answers to frequently
          asked questions and get support for any issues you may be experiencing.
        </p>
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-2 mb-2">
              <FaQuestionCircle className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">FAQ</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Find answers to the most commonly asked questions about our service.
            </p>
            <button
              onClick={() => handleButtonClick('/faq')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Go to FAQ
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Contact Support</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              If you need further assistance, please contact our support team at
              support@gotaxi.com or call us at (123) 456-7890.
            </p>
            <button
              onClick={() => handleButtonClick('/get-in-touch')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Contact Support
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200">
            <div className="flex items-center gap-2 mb-2">
              <FaBook className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">User Guides</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Access detailed guides on how to use our services effectively.
            </p>
            <button
              onClick={() => handleButtonClick('/user-guides')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Go to User Guides
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <div className="flex items-center gap-2 mb-2">
              <FaCreditCard className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Payment Information</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Learn about our payment methods, pricing, and billing process.
            </p>
            <button
              onClick={() => handleButtonClick('/payment-information')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Payment Information
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="1800">
            <div className="flex items-center gap-2 mb-2">
              <FaShieldAlt className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Safety Measures</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Understand the safety protocols we have in place to ensure your
              well-being.
            </p>
            <button
              onClick={() => handleButtonClick('/safety-measures')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Safety Measures
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="2100">
            <div className="flex items-center gap-2 mb-2">
              <FaTimesCircle className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Cancellation Policy</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Review our cancellation policy and learn how to cancel your bookings.
            </p>
            <button
              onClick={() => handleButtonClick('/cancellation-policy')}
              className="mt-4 w-1/5 py-1 px-2 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md text-sm"
            >
              Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
