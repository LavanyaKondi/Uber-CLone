import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import CarList from '../CarList/CarList';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const navigate = useNavigate();

  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleBooking = () => {
    console.log('Booking confirmed');
    navigate('/bookingsuccess', {
      state: {
        pickupLocation,
        dropoffLocation,
        selectedCar,
        distance,
        duration
      }
    });
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const getDirections = () => {
    if (pickupLocation && dropoffLocation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickupLocation,
          destination: dropoffLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setDistance(result.routes[0].legs[0].distance.text);
            setDuration(result.routes[0].legs[0].duration.text);
            setMapCenter(result.routes[0].legs[0].start_location);
          } else {
            console.error(`Error fetching directions: ${status}`);
            console.error(result);
          }
        }
      );
    } else {
      console.error('Pickup and dropoff locations are required');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            center={mapCenter}
            zoom={12}
            mapContainerStyle={{ width: '100%', height: '100%' }}
          >
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="w-1/2 p-6 bg-gray-100 dark:bg-gray-900 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Book a Ride</h1>
        <div className="mb-4">
          <label className="block mb-2">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Dropoff Location</label>
          <input
            type="text"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={getDirections}
          className="w-full bg-primary text-white py-2 rounded mb-4"
        >
          Show Route
        </button>
        {distance && duration && (
          <div className="mb-4">
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Select Car</h2>
          <CarList onCarSelect={handleCarSelect} />
          {selectedCar && (
            <div className="mt-4 p-4 border rounded bg-white">
              <h3 className="text-lg font-semibold">{selectedCar.name}</h3>
              <p>Price: ${selectedCar.price}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-primary text-white py-2 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
