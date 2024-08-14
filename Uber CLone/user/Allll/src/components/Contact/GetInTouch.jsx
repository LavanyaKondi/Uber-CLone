import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      window.alert('Please fill in all fields');
    } else {
      window.alert('Message sent successfully');
      // Clear form data
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="get-in-touch-page py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8" data-aos="zoom-in">
          Get In Touch
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div data-aos="fade-right">
            <label className="block text-gray-700 dark:text-gray-300">UserName</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div data-aos="fade-left">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div data-aos="fade-right">
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;