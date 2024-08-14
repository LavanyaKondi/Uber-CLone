
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import CarPng from "../../assets/car2.png";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Help from '../Help/Help'; // Import the Help component
import BookingPage from '../BookingPage/BookingPage'; // Import BookingPage component


// StarRating component
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

// RatingPage component
const RatingPage = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

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

    onSubmit(); // Navigate to thank you page or handle the submission
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

// ThankYouPage component
const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">Thank You!</h1>
      <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Your feedback is valuable to us.</p>
      <a
        href="#home"
        className="py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
      >
        Return to Home
      </a>
    </div>
  );
};

const UserPage = ({ theme, setTheme }) => {
  const [currentSection, setCurrentSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleRatingSubmit = () => {
    setCurrentSection('thankYou');
  };

  const handleBookingRedirect = () => {
    navigate('/booking'); // Redirect to the booking page
  };

  return (
    <div className="flex dark:bg-black dark:text-white duration-300 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen fixed top-15 left-0">
        <div className="text-center p-5 text-2xl font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="mt-5 space-y-2">
          <a href="#home" onClick={() => setCurrentSection('home')} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Home
          </a>
          <a href="#about" onClick={() => setCurrentSection('about')} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            About
          </a>
          <a href="#ratings" onClick={() => setCurrentSection('ratings')} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Ratings
          </a>
          <a href="#help" onClick={() => setCurrentSection('help')} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Help
          </a>
          <a href="#booking" onClick={handleBookingRedirect} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Booking
          </a>
          <button
            onClick={() => navigate('/')}
            className="mt-3 mx-0 py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded"
          > 
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 pl-8 pr-8 py-8">
        {currentSection === 'home' && (
          <>
            <h1 className="text-4xl mb-8">Welcome To User Dashboard</h1>
            <p>
              Here you can manage your bookings, check
              your ratings, and update your profile.
            </p>

          
            {/* Hero Section */}
            <div className="dark:bg-black dark:text-white duration-300 mt-8">
              <div className="container min-h-[620px] flex">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="false"
                    className="order-1 sm:order-2"
                  >
                    <img
                      src={theme === "dark" ? carPng : yellowCar}
                      alt=""
                      className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                    />
                  </div>
                  <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
                    <p
                      data-aos="fade-up"
                      className="text-primary text-2xl font-serif"
                    >
                      ANSWER TO ALL YOUR TRAVEL NEEDS.
                    </p>
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="text-5xl lg:text-7xl font-semibold font-serif"
                    >
                      GO TAXI SERVICES
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="1000">
                      We prioritize our customers’ convenience and satisfaction, and
                      we strive to provide the highest level of service possible.{" "}
                    </p>
                    <button
                      data-aos="fade-up"
                      data-aos-delay="1500"
                      onClick={() => {
                        AOS.refreshHard();
                      }}
                      className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentSection === 'about' && (
        <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
         Why Choose Our Cars?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="about-image">
        <img
          src={carPng}
          alt="Luxury Cars"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Content */}
      <div className="about-content space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          At our car rental service, we believe in offering more than just a set of wheels. We provide an experience tailored to your journey, whether it’s a business trip, a weekend getaway, or a special occasion. Our diverse fleet includes the latest models, meticulously maintained and equipped with cutting-edge technology to ensure your ride is smooth, safe, and stylish.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Enjoy hassle-free bookings, flexible rental plans, and 24/7 customer support. We’ve made it our mission to exceed your expectations, with vehicles that offer premium comfort and performance, so you can enjoy the ride as much as the destination.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Join the growing number of satisfied customers who trust us for all their transportation needs. Your adventure starts the moment you step into one of our cars.
        </p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
          Discover More
        </button>
      </div>
    </div>
  </div>
        )}

        {currentSection === 'ratings' && (
          <RatingPage onSubmit={handleRatingSubmit} />
        )}

        {currentSection === 'thankYou' && (
          <ThankYouPage />
        )}

        {currentSection === 'help' && (
          <Help />
        )}

        {currentSection === 'booking' && (
          <BookingPage />
        )}
      </div>
    </div>
  );
};

export default UserPage;
