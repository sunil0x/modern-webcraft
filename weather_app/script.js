
const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = "";



// 1. Select elements OUTSIDE the function
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const getWeatherData = async (cityName) => {
    // 2. Build the URL INSIDE the function using the cityName passed to it
    const requestUrl = `${baseUrl}/current.json?key=${apiKey}&q=${cityName}`;

    try {
        let response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error("Could not find city");
        }
        const data = await response.json();

        // 3. Update the DOM with data from the API response
        // Use classes or IDs that match your HTML
        document.querySelector(".city").innerText = data.location.name;
        document.querySelector(".temp").innerText = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerText = data.current.humidity + "%";
        document.querySelector(".wind").innerText = data.current.wind_kph + " km/hr";

    } catch (error) {
        console.error("Error:", error.message);
        alert("Error: " + error.message);
    }
}

// 4. Event listener on button click
searchBtn.addEventListener("click", () => {
    const cityValue = cityInput.value;
    if (cityValue) {
        getWeatherData(cityValue); // Pass the input value to the function
    }
});

// 5. Event listener for Enter key
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getWeatherData(cityInput.value);
    }
});