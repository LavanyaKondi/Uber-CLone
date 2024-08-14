import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Component imports
import About from "./components/About/About";
import AdminPage from "./components/AdminPage/page";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import GetInTouch from "./components/Contact/GetInTouch";
import DriverPage from "./components/DriverPage/DriverPage";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import LoginForm from "./components/SelectionPage/LoginForm";
import SelectionPage from "./components/SelectionPage/SelectionPage";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import UserPage from "./components/UserPage/UserPage";
import BookingPage from './components/BookingPage/BookingPage';
import BookingSuccessPage from "./components/BookingPage/BookingSuccessPage";
import Help from './components/Help/Help';
import FaqPage from './components/Help/FaqPage';
import UserGuides from './components/Help/UserGuides'; 
import PaymentInformationPage from './components/Help/PaymentInformationPage';
import SafetyMeasuresPage from "./components/Help/SafetyMeasuresPage";
import CancellationPolicyPage from "./components/Help/CancellationPolicyPage";
import FunctionalityPage from "./components/FunctionalityPage";
import DriverManagement from "./components/DriverManagement/DriverManagement";
import FinancialReport from "./components/FinancialReport/FinancialReport";
import RideManagement from "./components/RideManagement/RideManagement";
import UserManagement from "./components/UserManagement/UserManagement";

const App = () => {
  const handleLoginSubmit = () => {
    // Additional logic after login if needed
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <About />
                <Services />
                <CarList />
                <Testimonial />
                <AppStoreBanner />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/DriverPage" element={<DriverPage />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/profile/:activepage" element={<Profile />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/login" element={<LoginForm onSubmit={handleLoginSubmit} />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/bookingsuccess" element={<BookingSuccessPage/>}/>
          <Route path="/functionalities" element={<FunctionalityPage />} />
            <Route path="/help" element={<Help />} /> 
            <Route path="/faq" element={<FaqPage />} /> 
            <Route path="/user-guides" element={<UserGuides />} />
            <Route path="/payment-information" element={<PaymentInformationPage />} />
            <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
            <Route path="/safety-measures" element={<SafetyMeasuresPage />} />
            <Route path="/ridemanagement" element={<RideManagement />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/drivermanagement" element={<DriverManagement />} />
          <Route path="/financialreport" element={<FinancialReport />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
