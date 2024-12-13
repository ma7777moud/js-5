async function WeatherLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = ' 87023d7c34a94e6089e200248240912';
            const apiUrl ="https://api.weatherapi.com/v1/forecast.json?key=87023d7c34a94e6089e200248240912&q=lond&days=3"
            try {
                function displayWeather(data) {
                    const weatherInfo = `
                        <h1>${data.location.name}</h1>
                        <p>Date: ${data.forecast.forecastday[0].date}</p>
                        <p>time: ${data.forecast.forecastday[0].astro.sunrise}</p>
                        <p>text: ${data.current.condition.text}</p>
                        <p> ${data.current.temp_f}</p>
                        <p>clear</p>
                    `;
                    document.getElementById('weather-info').innerHTML = weatherInfo;
                }
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);
                displayWeather(data);                
            } catch (error) {
                console.error('Error weather data:', error);
            }
        }, (error) => {
            console.error('Error location:', error);
        });
    }
}