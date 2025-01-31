# Weather Forecast Site - 5-Day Prediction

## Overview
The **Weather Forecast Site** is a web-based application that provides users with real-time weather predictions for the next five days. This project is built using **React** and integrates with an external weather API to fetch and display accurate weather data.

## Features
#### * 5-Day Forecast: Get a detailed weather prediction for the upcoming five days.
#### * Interactive UI: A sleek and user-friendly React interface.
#### * Live API Integration: Fetch real-time weather data from a reliable weather API.
#### * City-Based Search: Search and get weather details for any location.
#### * Responsive Design: Optimized for both desktop and mobile devices.

## Technologies Used
#### 1. React: Frontend framework for building the UI.
#### 2. OpenWeatherMap API (or another weather API): Fetching live weather data.
#### 3. HTML, CSS, JavaScript: Core web technologies for structuring and styling.
#### 4. Axios: For making API requests.
#### 5. React Router: For navigation between pages (if applicable).

## Project Structure

Weather-Forecast-Site

  #### public
      1. index.html              # Main HTML file
  #### src
      2. components/
         - WeatherCard.js         # Component to display weather details
         - SearchBar.js           # Component for searching cities
      3. pages/
         - Home.js                # Main page displaying weather forecast
      4. services/
         - weatherService.js      # API call functions
      5. App.js                   # Main React app file
      6. index.js                 # React root file
  #### assets
      7. styles.css               # Custom styling for UI
  #### config
      8. config.js                # API key configuration file
  #### README.md                  # Project documentation (this file)

## How to Run the Project

### 1. Clone the Repository
Clone the repository to your local machine:

    git clone <repository-url>
    cd Weather-Forecast-Site

### 2. Install Dependencies
Install the required dependencies using npm or yarn:

    npm install
    # or
    yarn install

### 3. Set Up API Key
1. Sign up for an API key from OpenWeatherMap (or your chosen weather API provider).
2. Create a `.env` file in the project root and add:

    REACT_APP_WEATHER_API_KEY=your_api_key_here

### 4. Start the Application
Run the app locally with:

    npm start
    # or
    yarn start

### 5. Open the App in Your Browser
After running the command, the app will be available at:

    http://localhost:3000

## Screenshots

### 1. Home Page - Search for City
![Screenshot (288)](https://github.com/user-attachments/assets/4fcf6b3b-5144-4306-bb0c-92ed056679b5)

### 2. Eneter the city 
![Screenshot (289)](https://github.com/user-attachments/assets/998cd305-85b5-4c67-a120-6a9284a19943)

### 3. Detailed Weather Information
![Screenshot (290)](https://github.com/user-attachments/assets/796084ac-a23c-40b0-bc30-a5157c76e78d)

### 4. Even for outer Cities also
![Screenshot (291)](https://github.com/user-attachments/assets/bd6c5f90-7a06-4780-bd66-86dbc7ad1610)

## Additional Features
  #### * Real-time Weather Updates: Fetches the latest weather conditions every refresh.
  #### * Temperature & Wind Speed Display: Shows temperature, humidity, wind speed, and more.
  #### * Weather Icons: Uses API-based icons for different weather conditions.
  #### * Mobile Friendly: Fully responsive design for all devices.

This project is a simple yet powerful weather forecast app that helps users plan their days based on upcoming weather conditions.

