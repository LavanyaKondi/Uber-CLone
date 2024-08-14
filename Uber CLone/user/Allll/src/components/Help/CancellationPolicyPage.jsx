import React, { useEffect } from 'react';
import AOS from 'aos';

const CancellationPolicyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200" data-aos="fade-up">
          Cancellation Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-200" data-aos="fade-up" data-aos-delay="300">
          Understand our cancellation policy and learn how to cancel your bookings effectively.
        </p>
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl font-semibold">Cancellation Fees</h3>
            <p className="text-gray-700 dark:text-gray-200">
              We charge a cancellation fee if you cancel your booking within 30 minutes of the scheduled pickup time.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="900">
            <h3 className="text-xl font-semibold">Cancellation Process</h3>
            <p className="text-gray-700 dark:text-gray-200">
              To cancel a booking, go to your account section and find the booking you wish to cancel. Follow the prompts to complete the cancellation.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1200">
            <h3 className="text-xl font-semibold">Refunds</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Refunds for cancellations are processed within 5-7 business days. Please check your email for confirmation of the refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
