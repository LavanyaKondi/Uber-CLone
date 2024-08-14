import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onSubmit, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    role: 'user',
    firstName: '',
    lastName: '',
    password: '',
    // confirmPassword: '',
    contactNumber: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Backend Response:', result); // Log backend response

      if (response.ok) {
        alert('Registration successful!');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert(`Registration failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl w-full space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">Sign Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          >
            <option value="user">User</option>
            <option value="driver">Driver</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
        {/* <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div> */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
      >
        Sign Up
      </button>
      <button
        type="button"
        onClick={onSwitchToLogin}
        className="w-full py-2 px-4 bg-secondary hover:bg-secondary/80 transition duration-500 text-black rounded-md mt-4"
      >
        Already existing user? Sign In
      </button>
    </form>
  );
};

export default SignUpForm;
