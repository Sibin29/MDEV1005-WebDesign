import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null); // State to track errors
  const [loaded, setLoaded] = useState(false); // State to track if data has been loaded

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=e072734252df134395f4de8cf758a8be&q=Barrie`
      );
      setWeather(response.data);
      setLoaded(true); // Mark data as loaded successfully
    } catch (error) {
      setError("Failed to fetch weather data."); // Set error message
      setLoaded(true); // Mark data as loaded with error
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>Weather</h2>
      {loaded ? (
        error ? (
          <p>{error}</p> // Show error message if there's an error
        ) : (
          <div>
            <p>Location: {weather.location.name}</p>
            <p>Temperature: {weather.current.temp_c}°C</p>
          </div>
        )
      ) : (
        <p>Loading...</p> // Show loading until data is fetched
      )}
    </div>
  );
};

export default WeatherWidget;
 