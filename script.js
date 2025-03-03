const apiKey = "938dcc2b9342504bd1de8c210ef9ac99"; // Replace with your OpenWeatherMap API key

document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value.trim(); // Get user input

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found. Please enter a valid city name!");
                return;
            }

            console.log(data); // Debugging: Check API response in console

            // Update UI with fetched data
            document.getElementById("city").innerText = `📍 Location: ${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `🌡️ Temperature: ${data.main.temp}°C`;
            document.getElementById("description").innerText = `☁️ Weather: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

            // Show the weather result
            document.getElementById("weatherResult").classList.remove("hidden");
        })
        .catch(error => console.error("Error fetching weather data:", error));
});
