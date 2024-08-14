import React from "react";
import { useNavigate } from "react-router-dom";
import CarPng from "../../assets/car1.png";

const About = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/functionalities");
  };

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                We are committed to providing safe and reliable transportation for everyone. Contact us today to learn more about our services and to book your next ride.
              </p>
              <p data-aos="fade-up">
                We Are Available 24/7.
              </p>
              <button
                data-aos="fade-up"
                className="button-outline"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
