const APIKEY = "e3ec0197c13102407039b96646d1fa58";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

function checkWeather(city = "Surat") {

    if (!city) return;

    cityEl.innerHTML = "Loading...";
    tempEl.innerHTML = "--";
    humidityEl.innerHTML = "--";
    windEl.innerHTML = "--";

    fetch(`${URL}${city}&appid=${APIKEY}`)
        .then(res => {
            if (!res.ok) throw new Error("City not found");
            return res.json();
        })
        .then(data => {
            cityEl.innerHTML = data.name;
            tempEl.innerHTML = Math.floor(data.main.temp) + "°C";
            humidityEl.innerHTML = data.main.humidity + "%";
            windEl.innerHTML = data.wind.speed + " Km/h";
        })
        .catch(() => {
            cityEl.innerHTML = "City Not Found";
        });
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});

checkWeather();