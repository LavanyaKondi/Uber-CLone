import React from 'react';

const Account = () => {
  const getUserFormData = () => {
    const userData = localStorage.getItem('formData_user');
    return userData ? JSON.parse(userData) : null;
  };

  const getDriverFormData = () => {
    const driverData = localStorage.getItem('formData_driver');
    return driverData ? JSON.parse(driverData) : null;
  };

  const getAdminFormData = () => {
    const adminData = localStorage.getItem('formData_admin');
    return adminData ? JSON.parse(adminData) : null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl w-full space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">Profile Information</h2>

      {/* User Section */}
      {getUserFormData() && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">User Data:</h3>
          <p>First Name: {getUserFormData().firstName}</p>
          <p>Last Name: {getUserFormData().lastName}</p>
          <p>Contact Number: {getUserFormData().contactNumber}</p>
        </div>
      )}

      {/* Driver Section */}
      {getDriverFormData() && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Driver Data:</h3>
          <p>First Name: {getDriverFormData().firstName}</p>
          <p>Last Name: {getDriverFormData().lastName}</p>
          <p>Contact Number: {getDriverFormData().contactNumber}</p>
        </div>
      )}

      {/* Admin Section */}
      {getAdminFormData() && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Admin Data:</h3>
          <p>First Name: {getAdminFormData().firstName}</p>
          <p>Last Name: {getAdminFormData().lastName}</p>
          <p>Contact Number: {getAdminFormData().contactNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Account;
