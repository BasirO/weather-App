import { weather } from './getWeather';
import { viewData } from './view'; 

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener('submit',(event)=>{
    event.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await weather.loadData(searchInput.value);
    viewData.searchResult(weatherData);
  });