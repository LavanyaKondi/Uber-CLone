import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Location = ({ label, onLocationChange }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value);
  };

  return (
    <div
      className="location-container flex flex-col mb-4"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <label className="mb-2 text-gray-700 dark:text-gray-200 text-lg font-serif">{label}</label>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder={`Enter ${label}`}
        className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-gray-800 transition duration-300"
      />
    </div>
  );
};

export default Location;
