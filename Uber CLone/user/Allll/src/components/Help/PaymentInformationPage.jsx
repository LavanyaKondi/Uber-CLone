import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const PaymentInformationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Credit Card', details: '**** **** **** 1234' },
    { id: 2, type: 'Digital Wallet', details: 'Google Pay' },
  ]);

  const [paymentHistory, setPaymentHistory] = useState([
    { id: 1, date: '2024-06-21', amount: '$15.00', method: 'Credit Card', status: 'Completed' },
    { id: 2, date: '2024-06-15', amount: '$20.00', method: 'Google Pay', status: 'Completed' },
  ]);

  const handleAddPaymentMethod = () => {
    // Function to handle adding a new payment method
  };

  const handleRemovePaymentMethod = (id) => {
    // Function to handle removing a payment method
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300 min-h-screen flex flex-col items-center p-8">
      <div className="container max-w-3xl space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200" data-aos="fade-up">
          Payment Information
        </h2>
        <p className="text-gray-700 dark:text-gray-200" data-aos="fade-up" data-aos-delay="300">
          Learn about our payment methods, pricing, and billing process.
        </p>
        
        <div className="space-y-4">
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl font-semibold">Payment Methods</h3>
            <p className="text-gray-700 dark:text-gray-200">
              We accept various payment methods including credit cards, debit cards, and digital wallets.
            </p>
            <div className="mt-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-md mb-2">
                  <div>
                    <span className="font-semibold">{method.type}: </span>
                    <span>{method.details}</span>
                  </div>
                  <button
                    onClick={() => handleRemovePaymentMethod(method.id)}
                    className="py-1 px-2 bg-red-500 hover:bg-red-600 transition duration-300 text-white rounded-md text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddPaymentMethod}
                className="mt-2 w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
              >
                Add Payment Method
              </button>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="900">
            <h3 className="text-xl font-semibold">Pricing</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our pricing is transparent and competitive. You can view detailed pricing information in your account section.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="1200">
            <h3 className="text-xl font-semibold">Billing Process</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Billing is processed automatically after your ride. You will receive a detailed receipt via email.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="1500">
            <h3 className="text-xl font-semibold">Payment History</h3>
            <div className="overflow-auto max-h-64">
              {paymentHistory.map((history) => (
                <div key={history.id} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-md mb-2">
                  <div>
                    <span className="font-semibold">{history.date}</span>
                    <span> - {history.amount}</span>
                    <span> ({history.method})</span>
                  </div>
                  <span className={`font-semibold ${history.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                    {history.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="1800">
            <h3 className="text-xl font-semibold">Invoices & Receipts</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Access your past invoices and receipts for all your rides.
            </p>
            <button
              className="mt-2 w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
            >
              View Invoices & Receipts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformationPage;
