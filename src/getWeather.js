const apiKey = 'd20649973e74705b1bc2e45ce220c395';

export const weather =(()=>{
function convertDta(data){
    const {
        name:city,
        main :{temp: temperature, feels_like:feelsLike,humidity},
        wind :{speed:windSpeed},
        weather :{ icon : Icon},
    } = data;
    return { city,temperature,feelsLike,humidity,windSpeed,Icon};

}

async function loadData(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`+apiKey);
    try{
        if(!data.ok) throw new Error(`City ${city} Not Found`);
        const weatherData = convertDta(await data.json());
        return weatherData;
    } catch(err){
        alert(err);
        return null;
    }
}
return {loadData};    
})();

