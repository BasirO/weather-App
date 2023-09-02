
export const viewData = (() =>{
    function searchResult(weatherData){
        if(!weatherData) return;
        const parent = document.getElementById('parent');
        parent.classList.add('active');
        const city = document.getElementById('city');
        const temp = document.getElementById('temp');
        const feels = document.getElementById('feels');
        const hum = document.getElementById('humi');
        const wind = document.getElementById('wind');

        
        city.textContent = `${weatherData.city}`;
        temp.textContent = `${weatherData.temperature} °C`;
        feels.textContent = `Feels Like: ${weatherData.feelsLike} °C`;
        hum.textContent =`Humidity: ${weatherData.humidity} %`;
        wind.textContent = ` Wind: ${weatherData.windSpeed} km/h`;
    }
    return { searchResult };
})();
