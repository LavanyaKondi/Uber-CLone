import React, { useState, useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import {
  Navlinks as homepageNavlinks,
  userNavlinks,
  driverNavlinks,
  adminNavlinks,
} from "./commonNavlinks";

const Navbar = ({ theme, setTheme, role }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(`formData_${role}`));
    if (userData) {
      setUserName(userData.firstName);
    }
  }, [role]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("formData_user");
    localStorage.removeItem("formData_driver");
    localStorage.removeItem("formData_admin");
    setUserName("");
    navigate("/selection"); // Redirect to SelectionPage after logout
  };

  let navlinks;
  let panelName;

  switch (role) {
    case "admin":
      navlinks = adminNavlinks;
      panelName = "ADMIN PANEL";
      break;
    case "driver":
      navlinks = driverNavlinks;
      panelName = "DRIVER PANEL";
      break;
    case "user":
      navlinks = userNavlinks;
      panelName = "USER PANEL";
      break;
    default:
      navlinks = homepageNavlinks;
      panelName = "GO TAXI";
      break;
  }

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">{panelName}</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* DarkMode feature implementation */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
              {/* Profile Icon */}
              <div className="relative">
                {userName ? (
                  <span
                    onClick={toggleDropdown}
                    className="text-lg cursor-pointer"
                  >
                    {userName}
                  </span>
                ) : (
                  <FaUser
                    onClick={toggleDropdown}
                    className="text-2xl cursor-pointer"
                  />
                )}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                    <Link
                      to="/selection"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                    >
                      Sign Up / Login
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                    >
                      Logout
                    </button>
                    <Link
                      to="/profile/:activepage"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} role={role} />
    </div>
  );
};

export default Navbar;
