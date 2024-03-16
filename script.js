function getWeather() {
    const apiKey = '83c76fa4446d27f41abf7c6b1adc7045';
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Please  enter a city');
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(Response => Response.json())
        .then(data => {
            displayWeather (data);
        })
        .catch(error => {
            console.error('Error fetching current weather data', error);
                    alert('Error fetching current weather data. Please try again');
        });

        fetch(forecastUrl)
            .then(Response => Response.json())
            .then(data => {
                displayHourlyForecast(data.list);
            })
            .catch(error => {
                console.error('Error fetching hourly forecast data', error);
                        alert('Error fetching hourly forecast data. Please try again.');
            });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getAnimations('weather-info');
    const weatherIcon = document.getElementById('weather-icon')
    const hourlyForecastDiv = document.getElementById ('hourly-forecast');

    weatherInfoDiv.innerHtml = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

   if (data.cod === "404") {
     weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
   } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweather.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `
    <p>${temperature}°C</p>
    `;
    const weatherHtml = ` 
    <p>${cityName}</p>
    <p>${description}</p>
    `;
    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHtml;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    

    showImage();


   } 
   

}