function updateWeather(response) {
    let weatherValueElement = document.querySelector("#weather-value");
    let weatherValue = response.data.temperature.current;
    weatherValueElement.innerHTML = Math.round(weatherValue);
}

function searchCity(city) {
let apiKey = "d059510f0t7f54boed6ea43f3f206f9c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather)
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherAppCityElement = document.querySelector("#weather-app-city");
  weatherAppCityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Pretoria")