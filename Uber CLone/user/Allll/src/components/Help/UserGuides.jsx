import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaUser, FaCar, FaMapMarkedAlt, FaMoneyBillAlt, FaClock, FaExclamationCircle } from 'react-icons/fa';

const UserGuides = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200" data-aos="fade-up">
          User Guides
        </h2>
        <p className="text-gray-700 dark:text-gray-200" data-aos="fade-up" data-aos-delay="300">
          Here you can find detailed guides on how to use our cab booking services effectively.
        </p>
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-2 mb-2">
              <FaUser className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Getting Started</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Learn how to create an account, log in, and set up your profile.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            <div className="flex items-center gap-2 mb-2">
              <FaCar className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Booking a Ride</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Follow these steps to book a ride, choose your vehicle, and confirm your booking.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200">
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkedAlt className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Tracking Your Ride</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Learn how to track your ride in real-time, view driver details, and estimated arrival time.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <div className="flex items-center gap-2 mb-2">
              <FaMoneyBillAlt className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Payment Methods</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Explore the different payment methods we accept and how to add a payment method to your account.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1800">
            <div className="flex items-center gap-2 mb-2">
              <FaClock className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Ride History</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Access your ride history, view past rides, and download receipts.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="2100">
            <div className="flex items-center gap-2 mb-2">
              <FaExclamationCircle className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Troubleshooting</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              Find solutions to common issues and learn how to get help if you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default UserGuides;