import React, { useState } from 'react';
import './UserManagement.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import userImage from '../../assets/ride.jpg'; // Import the image

const UserManagement = () => {
  // Initial state for users
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Nani',
      email: 'Nani@gmail.com',
      contactNumber: '123-456-7890',
      travelDistance: '100 km',
      carPrice: '$50',
      driver: 'John Doe',
      status: 'pending', // New field to track user status
    },
    {
      id: 2,
      username: 'Jalal',
      email: 'jalal@gmail.com',
      contactNumber: '987-654-3210',
      travelDistance: '200 km',
      carPrice: '$100',
      driver: 'Jane Smith',
      status: 'pending', // New field to track user status
    },
    {
      id: 3,
      username: 'Pranavi',
      email: 'pranavi@gmail.com',
      contactNumber: '555-555-5555',
      travelDistance: '150 km',
      carPrice: '$75',
      driver: 'Mike Johnson',
      status: 'pending', // New field to track user status
    },
    {
      id: 3,
      username: 'Pranavi',
      email: 'pranavi@gmail.com',
      contactNumber: '555-555-5555',
      travelDistance: '150 km',
      carPrice: '$75',
      driver: 'Mike Johnson',
      status: 'pending', // New field to track user status
    },
  ]);

  const [newUser, setNewUser] = useState({ username: '', email: '', contactNumber: '', travelDistance: '', carPrice: '', driver: '' });

  const addUser = () => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        username: newUser.username,
        email: newUser.email,
        contactNumber: newUser.contactNumber,
        travelDistance: newUser.travelDistance,
        carPrice: newUser.carPrice,
        driver: newUser.driver,
        status: 'pending',
      },
    ]);
    setNewUser({ username: '', email: '', contactNumber: '', travelDistance: '', carPrice: '', driver: '' });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const acceptUser = (id) => {
    setUsers(users.map((user) => user.id === id ? { ...user, status: 'accepted' } : user));
  };

  const rejectUser = (id) => {
    setUsers(users.map((user) => user.id === id ? { ...user, status: 'rejected' } : user));
  };

  return (
    <div className="user-management">
      <div className="table-container">
        <h1>User Management</h1>
        
        <section>
          <table>
            <thead>
              <tr>
                <th><i className="fas fa-user"></i> Username</th>
                <th><i className="fas fa-envelope"></i> Email</th>
                <th><i className="fas fa-phone"></i> Contact Number</th>
                <th><i className="fas fa-road"></i> Travel Distance</th>
                <th><i className="fas fa-dollar-sign"></i> Car Price</th>
                <th><i className="fas fa-id-badge"></i> Driver</th>
                <th>Status / Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.travelDistance}</td>
                  <td>{user.carPrice}</td>
                  <td>{user.driver}</td>
                  <td>
                    {user.status}
                    <br />
                    <button onClick={() => acceptUser(user.id)} disabled={user.status !== 'pending'}>Accept</button>
                    <button onClick={() => rejectUser(user.id)} disabled={user.status !== 'pending'}>Reject</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
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

export default UserManagement;
