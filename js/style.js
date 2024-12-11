async function WeatherLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.lat;
            const lon = position.long;
            const apiKey = ' 87023d7c34a94e6089e200248240912';
            const apiUrl =http//api.weatherapi.com/v1/search.json?key=87023d7c34a94e6089e200248240912&q=lond


            try {
                function displayWeather(data) {
                    const weatherInfo = `
                        <h2>Weather Info:</h2>
                        <p>Location: ${data.city[0]}</p>
                        <p>Temperature: ${data.list[0].main.temp}°C</p>
                        <p>Condition: ${data.list[0].weather[0].description}</p>
                    `;
                    document.getElementById('weather-info').innerHTML = weatherInfo;
                }
                const data = await response.json();
                displayWeather(data);
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
            } catch (error) {
                console.error('Error weather data:', error);
            }
        }, (error) => {
            console.error('Error location:', error);
        });
    }
}
