import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchResults() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const geoResponse = await axios.get(
          `https://www.mapquestapi.com/geocoding/v1/address?key=fiBgDXQfnESep4GjNGPJkLjT2nnH68QB&location=${cityName}`
        );

        const { lat, lng } = geoResponse.data.results[0].locations[0].latLng;
        console.log(lat)
        console.log(lng)
        const openMeteoResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`
        );

        console.log(openMeteoResponse)

        setWeatherData(openMeteoResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (cityName) {
      fetchWeatherData();
    }
  }, [cityName]);

  const handleKeyDown = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div>
      <h2>SearchResults</h2>
      <input type="text" value={cityName} onChange={handleKeyDown} placeholder="Enter city name" />
      {weatherData && (
        <div>
          <h3>Weather:</h3>
          <p>Temperature: {weatherData.hourly.temperature_2m[0]}</p>
          {/* Display other weather data properties as needed */}
        </div>
      )}
    </div>
  );
}
