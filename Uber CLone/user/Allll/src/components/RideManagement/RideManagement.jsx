import React, { useState } from 'react';
import './RideManagement.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import rideImage from '../../assets/ride.jpg';

const RideManagement = () => {
  const [rides, setRides] = useState([
    {
      id: 1,
      username: 'Jaman',
      email: 'jaman@gmail.com',
      location: 'New York',
      destination: 'Los Angeles',
      status: 'ongoing',
    },
    {
      id: 2,
      username: 'Smitha',
      email: 'smitha@gmail.com',
      location: 'San Francisco',
      destination: 'Seattle',
      status: 'ongoing',
    },
    {
      id: 3,
      username: 'Jaman',
      email: 'jaman@gmail.com',
      location: 'New York',
      destination: 'Los Angeles',
      status: 'ongoing',
    },
    {
      id: 4,
      username: 'Farah',
      email: 'farah@gmail.com',
      location: 'Surat',
      destination: 'Cubic Mall',
      status: 'past',
    },
    {
      id: 5,
      username: 'Nayna',
      email: 'nayna@gmail.com',
      location: 'Shopping Mall',
      destination: 'Park',
      status: 'past',
    },
    {
      id: 6,
      username: 'Farah',
      email: 'farah@gmail.com',
      location: 'Surat',
      destination: 'Cubic Mall',
      status: 'past',
    },
    
    // Add more rides as needed
  ]);

  const ongoingRides = rides.filter((ride) => ride.status === 'ongoing');
  const pastRides = rides.filter((ride) => ride.status === 'past');

  return (
    <div className="ride-management">
      <div className="table-container">
        <h1>Ride Management</h1>
        
        <section>
          <h2>Ongoing Rides</h2>
          <table>
            <thead>
              <tr>
                <th><i className="fas fa-user"></i> Username</th>
                <th><i className="fas fa-envelope"></i> Email</th>
                <th><i className="fas fa-map-marker-alt"></i> Location</th>
                <th><i className="fas fa-arrow-right"></i> Destination</th>
              </tr>
            </thead>
            <tbody>
              {ongoingRides.map((ride) => (
                <tr key={ride.id}>
                  <td>{ride.username}</td>
                  <td>{ride.email}</td>
                  <td>{ride.location}</td>
                  <td>{ride.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Past Rides</h2>
          <table>
            <thead>
              <tr>
                <th><i className="fas fa-user"></i> Username</th>
                <th><i className="fas fa-envelope"></i> Email</th>
                <th><i className="fas fa-map-marker-alt"></i> Location</th>
                <th><i className="fas fa-arrow-right"></i> Destination</th>
              </tr>
            </thead>
            <tbody>
              {pastRides.map((ride) => (
                <tr key={ride.id}>
                  <td>{ride.username}</td>
                  <td>{ride.email}</td>
                  <td>{ride.location}</td>
                  <td>{ride.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <button className="view-more-btn">View More</button>
      </div>

      <div className="image-container">
        <img src={rideImage} alt="Ride Management" />
        <br></br><br></br>
        <img src={rideImage} alt="Ride Management" />
      </div>
    </div>
  );
};

export default RideManagement;
