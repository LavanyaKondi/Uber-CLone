import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';

// Load the Stripe public key
const stripePromise = loadStripe('your_stripe_public_key'); // Replace with your Stripe public key

// Dummy car data for demonstration purposes
const selectedCar = {
  name: 'Tesla Model S',
  price: 120,
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { car, distance, duration } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (paymentMethod === 'cash') {
      setSuccess('Booking successful! Thank you for your cash payment.');
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      setSuccess('Payment successful! Thank you for your booking.');
      console.log('Received Stripe PaymentMethod:', stripePaymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
      <div className="mb-4">
        <label className="block mb-2">Selected Car</label>
        {car ? (
          <>
            <p>{car.name}</p>
            <p>Price: ${car.price}</p>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
          </>
        ) : (
          <p>No car selected.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="card">Card</option>
          <option value="paytm">Paytm</option>
          <option value="cash">Cash</option>
        </select>
      </div>
      {paymentMethod === 'card' && (
        <div className="mb-4">
          <label className="block mb-2">Card Details</label>
          <CardElement />
        </div>
      )}
      {paymentMethod === 'paytm' && (
        <div className="mb-4">
          <label className="block mb-2">Paytm Integration Placeholder</label>
          <p>Implement Paytm payment flow here.</p>
        </div>
      )}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <button type="submit" className="w-full bg-primary text-white py-2 rounded">Pay Now</button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
