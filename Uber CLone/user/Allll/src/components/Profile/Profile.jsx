import React from 'react';
import { useParams } from 'react-router-dom';
import CarPng from "../../assets/car1.png";
import Account from '../Account/Account';
import ChangePassword from '../ChangePaddword/ChangePassword';
import Userprofile from '../Userprofile/Userprofile';
import './Profile.css';

const Profile = () => {
  const { activepage } = useParams();

  let renderComponent;
  switch (activepage) {
    case 'Account':
      renderComponent = <Account />;
      break;
    case 'ChangePassword':
      renderComponent = <ChangePassword />;
      break;
    default:
      renderComponent = null;
  }

  return (
    <div className='userprofileclass'>
      <div className="userprofikein">
        <div className='left'>
          <div className="place-items-center">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src={CarPng}
                alt=""
                className="sm:scale-125 sm:-translate-x-5 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='rigthone'>
            <Userprofile activepage={activepage} />
          </div>
          <div className="righttwo">
            {renderComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
