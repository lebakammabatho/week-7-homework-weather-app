function getWeather() 
{ const city = document.getElementById('city-input').value; 
const apiKey = d059510f0t7f54boed6ea43f3f206f9c; 
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; fetch(url) .then(response => response.json()) .then(data => { displayWeather(data); })
 
 .catch(error => { console.log('Error fetching weather data:', error); }); } 
function displayWeather(data) { const weatherDetails = document.getElementById('weather-details'); 
weatherDetails.innerHTML = ` <h3>${data.name}</h3> <p>Temperature: ${data.main.temp}°C</p> <p>Description: ${data.weather[0].description}</p> `; }

