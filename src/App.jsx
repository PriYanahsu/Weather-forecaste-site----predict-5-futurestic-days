import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = 'url(/images/default.jpg)';
    document.body.style.transition = 'background-image 0.5s ease-in-out';
  }, []);
  const getBackgroundImage = (weather) => {
    switch (weather) {
      case 'Clear':
        return 'url(/images/Sunny.jpg)';
      case 'Rain':
        return 'url(/images/Rainy.jpg)';
      case 'Clouds':
        return 'url(/images/Cloudy.jpg)';
      case 'Thunderstorm':
        return 'url(/images/thunderStorm.jpg)';
      case 'Snow':
        return 'url(/images/Snow.jpg)';
      case 'Mist':
        return 'url(/images/mist.jpg)';
      case 'Fog':
        return 'url(/images/fog.jpg)';
      case 'Drizzle':
        return 'url(/images/drizzel.jpg)';
      case 'Haze':
        return 'url(/images/Haze.jpg)';
      case 'Dust':
        return 'url(/images/Dust.jpg)';
      case 'Sand':
        return 'url(/images/Sand.jpg)';
      case 'Ash':
        return 'url(/images/Ash.jpg)';
      default:
        return 'url(/images/default.jpg)';
    }
  };

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Fetch current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      setWeather(weatherResponse.data);

      // Fetch 5-day weather forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      setForecast(forecastResponse.data); // Set the forecast data

      // Update the background image based on the current weather condition
      document.body.style.backgroundImage = getBackgroundImage(weatherResponse.data.weather[0].main);
    } catch (err) {
      setError('Could not fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="navbar-cornor">
        <Navbar />
      </div>
      <div className="App">
        <div className="weather-container">
          <h1>Weather App</h1>
          <p>Get the most accurate and up-to-date weather details for your city!</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather} disabled={loading}>
              {loading ? 'Loading...' : 'Get Weather'}
            </button>
          </div>

          {/* Display Current Weather */}
          {weather && !error && (
            <div className="current-weather-info">
              <p>City: {weather.name || city}</p>
              <h2>Current Weather</h2>
              <div className="current-weather-details">
                <p className="temperature">{weather.main.temp}°C</p>
                <p className="description">{weather.weather[0].description}</p>
                <p className="humidity">Humidity: {weather.main.humidity}%</p>
                <p className="wind">Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          )}

          {/* Display 5-Day Forecast */}
          {forecast && !error && (
            <div className="forecast-info">
              <h2>5-Day Forecast</h2>
              <div className="forecast-container">
                {forecast.list.map((item, index) => {
                  // Filter the forecast data to show one entry per day (every 8th data point represents a new day)
                  if (index % 8 === 0 && new Date(item.dt * 1000).toLocaleDateString() !== new Date().toLocaleDateString()) {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    const temp = item.main.temp;
                    const description = item.weather[0].description;
                    const icon = item.weather[0].icon;

                    return (
                      <div key={item.dt} className="forecast-item">
                        <div className="forecast-date">
                          <p>{date}</p>
                        </div>
                        <div className="forecast-icon">
                          <img
                            src={`https://openweathermap.org/img/wn/${icon}.png`}
                            alt={description}
                            className="weather-icon"
                          />
                        </div>
                        <div className="forecast-details">
                          <p className="temperature">{temp}°C</p>
                          <p className="description">{description}</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
