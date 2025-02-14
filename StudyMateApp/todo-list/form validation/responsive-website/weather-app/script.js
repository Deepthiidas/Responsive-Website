const apiKey = "0b2801fd9b81166cca6352e2a12f1eec"; // Replace with your OpenWeatherMap API Key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod === "404") {
            weatherInfo.innerHTML = `<p>City not found. Try again!</p>`;
            return;
        }

        // Extract data
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        // Display data
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${description}</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error fetching data. Please try again.</p>`;
    }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    }
});
