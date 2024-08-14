import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { FaDownload, FaRegEnvelope, FaExclamationTriangle } from 'react-icons/fa';

const SafetyMeasuresPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmissionStatus('Your safety concern has been submitted. We will address it promptly.');
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200" data-aos="fade-up">
          Safety Measures
        </h2>
        <p className="text-gray-700 dark:text-gray-200" data-aos="fade-up" data-aos-delay="300">
          Learn about the safety measures we have implemented to ensure your well-being during rides.
        </p>
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl font-semibold">Vehicle Safety</h3>
            <p className="text-gray-700 dark:text-gray-200">
              All our vehicles are thoroughly inspected and maintained to meet safety standards.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            <h3 className="text-xl font-semibold">Driver Safety Training</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our drivers undergo rigorous training to ensure they follow safety protocols and provide a secure ride.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200">
            <h3 className="text-xl font-semibold">Emergency Assistance</h3>
            <p className="text-gray-700 dark:text-gray-200">
              In case of emergencies, our support team is available 24/7 to assist you.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <h3 className="text-xl font-semibold">Safety Alerts</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Stay updated with real-time safety alerts and updates for your area.
            </p>
            <p className="text-gray-700 dark:text-gray-200 mt-2">No current alerts.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1800">
            <h3 className="text-xl font-semibold">Report Safety Concerns</h3>
            <p className="text-gray-700 dark:text-gray-200">
              If you have any safety concerns or need to report an incident, please use the form below.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
              >
                Submit
              </button>
              {submissionStatus && <p className="text-green-500 mt-2">{submissionStatus}</p>}
            </form>
          </div>
          <div data-aos="fade-up" data-aos-delay="2100">
            <a
              href="/path-to-safety-guidelines.pdf"
              download
              className="flex items-center gap-2 py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
            >
              <FaDownload className="text-xl" />
              Download Safety Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMeasuresPage;
