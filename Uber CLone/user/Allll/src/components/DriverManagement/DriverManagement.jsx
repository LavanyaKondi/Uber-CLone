import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import './DriverManagement.css'; // Import the CSS file
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import driverImage from '../../assets/ride.jpg'; // Import the image

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'lalith',
      email: 'lalith@gmail.com',
      status: 'pending',
      salary: 3000,
      rides: 10,
      rating: 4.5,
      statusOfAcceptance: 'pending',
      working: true,
    },
    {
      id: 2,
      name: 'lalith',
      email: 'lalith@gmail.com',
      status: 'pending',
      salary: 3000,
      rides: 10,
      rating: 4.5,
      statusOfAcceptance: 'pending',
      working: true,
    },
    {
      id: 3,
      name: 'lalith',
      email: 'lalith@gmail.com',
      status: 'pending',
      salary: 3000,
      rides: 10,
      rating: 4.5,
      statusOfAcceptance: 'pending',
      working: true,
    },
    // Add more drivers with similar details
  ]);

  const [newDriver, setNewDriver] = useState({ name: '', email: '', salary: '', rides: '', rating: '', working: true });

  const addDriver = () => {
    setDrivers([
      ...drivers,
      {
        id: drivers.length + 1,
        name: newDriver.name,
        email: newDriver.email,
        status: 'pending',
        salary: newDriver.salary,
        rides: newDriver.rides,
        rating: newDriver.rating,
        statusOfAcceptance: 'pending',
        working: newDriver.working,
      },
    ]);
    setNewDriver({ name: '', email: '', salary: '', rides: '', rating: '', working: true });
  };

  const deleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  const acceptDriver = (id) => {
    setDrivers(drivers.map((driver) => driver.id === id ? { ...driver, statusOfAcceptance: 'accepted' } : driver));
  };

  const rejectDriver = (id) => {
    setDrivers(drivers.map((driver) => driver.id === id ? { ...driver, statusOfAcceptance: 'rejected' } : driver));
  };

  // Data for the charts
  const chartData = {
    labels: ['Salaries', 'Number of Drivers', 'Expenditure for Fuel', 'Present Drivers', 'Drivers Left'],
    datasets: [
      {
        label: 'Driver Statistics',
        data: [50000, drivers.length, 20000, drivers.filter(driver => driver.working).length, drivers.length - drivers.filter(driver => driver.working).length],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="driver-management">
      <div className="table-container">
        <h1>Driver Management</h1>
        
        <section>
          <table>
            <thead>
              <tr>
                <th><i className="fas fa-user"></i> Name</th>
                <th><i className="fas fa-envelope"></i> Email</th>
                <th><i className="fas fa-id-badge"></i> Working or Left</th>
                <th><i className="fas fa-dollar-sign"></i> Salary</th>
                <th><i className="fas fa-car"></i> Rides</th>
                <th><i className="fas fa-star"></i> Rating</th>
                <th>Status / Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.name}</td>
                  <td>{driver.email}</td>
                  <td>{driver.working ? 'Working' : 'Left'}</td>
                  <td>${driver.salary}</td>
                  <td>{driver.rides}</td>
                  <td>{driver.rating}</td>
                  <td>
                    {driver.statusOfAcceptance}
                    <br />
                    <button onClick={() => acceptDriver(driver.id)} disabled={driver.statusOfAcceptance !== 'pending'}>Accept</button>
                    <button onClick={() => rejectDriver(driver.id)} disabled={driver.statusOfAcceptance !== 'pending'}>Reject</button>
                    <button onClick={() => deleteDriver(driver.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <br></br>
        <button className="view-more-btn">View More</button>
      </div>

    </div>
  );
};

export default DriverManagement;
