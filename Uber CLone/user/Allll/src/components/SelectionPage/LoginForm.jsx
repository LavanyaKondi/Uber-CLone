import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ onSubmit }) => {
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, password }),
      });

      const res = await response.json();

      if (response.ok) {
        const { role } = res;

        // Redirect based on role
        if (role === 'admin') {
          navigate('/AdminPage');
        } else if (role === 'driver') {
          navigate('/DriverPage');
        } else {
          navigate('/UserPage');
        }

        window.alert('Login successful');
        window.location.href="./UserPage";
      } else {
        window.alert(`Login failed: ${res.message}`);
      }
    } catch (err) {
      console.error('Error:', err);
      window.alert('Login failed');
    }

    onSubmit();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">Login</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          >
            <option value="user">User</option>
            <option value="driver">Driver</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Username:</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-200">Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-black"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary hover:bg-primary/80 transition duration-500 text-white rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
