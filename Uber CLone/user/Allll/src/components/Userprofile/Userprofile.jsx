import React from 'react';
import './Userprofile.css';
import { FaUser, FaBook, FaLock } from "react-icons/fa"; 
import { Link } from 'react-router-dom';

const Userprofile = () => {
  return (
    <div className='userSidebar'>
      <Link to='/profile/Account'>
        <div className="s1">
          <FaUser className='iconn'/>
          <span>Account Setting</span>
        </div>
      </Link>
      
      <Link to='/profile/ChangePassword'>
        <div className="s1">
          <FaLock className='iconn'/>
          <span>Password Change</span>
        </div>
      </Link>
    </div>
  );
}

export default Userprofile;

