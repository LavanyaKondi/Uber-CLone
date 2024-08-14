import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faMapMarkerAlt, faCreditCard, faHeadset, faShieldAlt, faRoute } from "@fortawesome/free-solid-svg-icons";

AOS.init();

const FunctionalityPage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: faCar,
      title: "Book rides easily with a user-friendly interface",
      description: "Our app provides a seamless and intuitive booking experience through its user-friendly interface. This feature is designed to make the process of scheduling a ride as straightforward as possible, ensuring users can quickly book a ride with minimal effort.",
      aos: "fade-left"
    },
    {
      icon: faMapMarkerAlt,
      title: "Real-time tracking of your rides",
      description: "Our app offers real-time tracking of your rides to ensure you are always informed about your trip's progress. Once a ride is booked, you can monitor its status on a live map, which updates continuously to reflect the current location of your driver. This feature provides peace of mind, allowing you to estimate arrival times accurately and track the route taken. Real-time tracking not only enhances transparency but also boosts safety, as you can share your ride details with friends or family for added security.",
      aos: "fade-right"
    },
    {
      icon: faCreditCard,
      title: "Multiple payment options",
      description: "To accommodate diverse user preferences, our app supports multiple payment options, making transactions as convenient as possible. Whether you prefer paying via credit/debit card, digital wallets, or other payment methods, the app integrates seamlessly with various payment gateways. This flexibility allows you to choose the payment method that best suits your needs, ensuring a smooth and hassle-free checkout process.",
      aos: "fade-left"
    },
    {
      icon: faHeadset,
      title: "24/7 customer support",
      description: "Our commitment to exceptional customer service is demonstrated through our 24/7 customer support. No matter the time of day or night, our dedicated support team is available to assist with any questions, issues, or concerns you may have. This round-the-clock availability ensures that help is always at hand, enhancing your overall experience with the app.",
      aos: "fade-right"
    },
    {
      icon: faShieldAlt,
      title: "Safety measures including in-app emergency button",
      description: "Safety is a top priority in our app, and we’ve implemented several measures to ensure user security. One of the key features is the in-app emergency button, which allows you to alert emergency services or notify designated contacts if you feel unsafe during a ride. This feature is easily accessible from the app’s interface and provides a quick and discreet way to seek assistance.",
      aos: "fade-left"
    },
    {
      icon: faRoute,
      title: "Advanced fare estimation and route optimization",
      description: "Our app features advanced fare estimation and route optimization to ensure you get the best value for your money and the most efficient travel routes. By analyzing various factors such as traffic conditions, distance, and time of day, the app provides accurate fare estimates before you confirm your ride. Additionally, route optimization helps in selecting the quickest and most cost-effective path to your destination.",
      aos: "fade-right"
    }
  ];

  return (
    <div className="dark:bg-black dark:text-white duration-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[620px] flex flex-col items-center">
        <div className="space-y-8 sm:space-y-12 w-full">
          <h1
            className="text-3xl sm:text-4xl font-bold font-serif text-gray-800 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            App Functionalities
          </h1>
          <p
            className="text-lg leading-8 tracking-wide text-gray-600 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            Our app offers a seamless experience with user-friendly ride booking, real-time tracking, and multiple payment options. Enjoy 24/7 customer support, safety features, and detailed trip histories. Benefit from integrated services, fare estimation, and customizable preferences, all while earning rewards through our referral program.
          </p>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start space-x-4 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                data-aos={feature.aos}
                data-aos-duration="1500"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-3xl text-primary" />
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">{feature.title}</span>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">Safety Features</h2>
            <p className="mt-2 text-lg leading-8 tracking-wide text-gray-600 dark:text-gray-300">
              We prioritize your safety with features like an in-app emergency button, ride-sharing details, and driver background checks.
            </p>
            <img src="/images/safety-features.svg" alt="Safety Features" className="w-full mt-4" data-aos="fade-up" data-aos-duration="1500" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">Community Guidelines</h2>
            <p className="mt-2 text-lg leading-8 tracking-wide text-gray-600 dark:text-gray-300">
              Our community guidelines ensure a respectful and safe environment for everyone. We encourage all users to adhere to these guidelines to maintain the highest standards of conduct.
            </p>
            <img src="/images/community-guidelines.svg" alt="Community Guidelines" className="w-full mt-4" data-aos="fade-up" data-aos-duration="1500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalityPage;
