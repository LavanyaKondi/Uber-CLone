import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yellowCar from '../../assets/banner-car.png';
import carPng from '../../assets/car.png';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';

const SelectionPage = ({ theme }) => {
  const [showForm, setShowForm] = useState(null); // 'signup' or 'login'
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSignUpSubmit = () => {
    setShowForm('login');
  };

  const handleLoginSubmit = () => {
    navigate('/');
  };

  const handleSwitchToLogin = () => {
    setShowForm('login');
  };

  const handleSwitchToSignUp = () => {
    setShowForm('signup');
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex items-center justify-center">
      {!showForm ? (
        <div className="container flex flex-col items-center space-y-5">
          <div className="flex justify-center mb-10">
            <img
              src={theme === 'dark' ? carPng : yellowCar}
              alt="Car"
              className="sm:scale-125 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <p className="text-primary text-2xl font-serif" data-aos="fade-up">
            ANSWER TO ALL YOUR TRAVEL NEEDS.
          </p>
          <h1
            className="text-5xl lg:text-7xl font-semibold font-serif"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            GO TAXI SERVICES
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => setShowForm('signup')}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Sign Up
            </button>
            <button
              onClick={() => setShowForm('login')}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              Login
            </button>
          </div>
        </div>
      ) : showForm === 'signup' ? (
        <SignUpForm onSubmit={handleSignUpSubmit} onSwitchToLogin={handleSwitchToLogin} />
      ) : (
        <LoginForm onSubmit={handleLoginSubmit} />
      )}
    </div>
  );
};

export default SelectionPage;
