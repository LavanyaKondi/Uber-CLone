import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import car4 from "../../assets/car4.png";
import car7 from "../../assets/car7.jfif";
import car8 from "../../assets/car8.jfif";

const carList = [
  {
    id: 1,
    name: "Station Wagon",
    price: 450,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Luxury Taxi",
    price: 700,
    image: car2,
    aosDelay: "500",
  },
  {
    id: 3,
    name: "Maxi Cab",
    price: 600,
    image: car3,
    aosDelay: "1000",
  },
  {
    id: 4,
    name: "Yellow Taxi",
    price: 250,
    image: car4,
    aosDelay: "0",
  },
  {
    id: 5,
    name: "Express Taxi",
    price: 440,
    image: car7,
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Volvo Bus",
    price: 1000,
    image: car8,
    aosDelay: "1000",
  },
];

const CarList = ({ onCarSelect, isHomePage }) => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Our Vehicles
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          With Good Condition And Super Fast. We Provide All Documents.
        </p>

        {/* Conditional rendering for homepage or booking page */}
        {isHomePage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {carList.map((car) => (
              <div
                key={car.id}
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${car.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  15Km
                </p>
                <button
                  onClick={() => onCarSelect(car)}
                  className="mt-2 bg-primary text-white py-1 px-3 rounded"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="car-list p-4">
            {carList.map((car) => (
              <div
                key={car.id}
                className="car-item p-4 border mb-4 rounded flex items-center space-x-4"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <p className="text-sm">Price: ${car.price} per day</p>
                  <button
                    onClick={() => onCarSelect(car)}
                    className="mt-2 bg-primary text-white py-1 px-3 rounded"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
