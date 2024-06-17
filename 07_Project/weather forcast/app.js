const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading Data...</h2>`;
    const API_KEY = '192698a3e3e1170a18f988509d1fafa3';
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log();
        return showWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        weather.innerHTML = '<p>Error fetching the weather data. Please try again later.</p>';
    }
};

const showWeather = (data) => {
    if(data.cod === '404') {
        weather.innerHTML = '<h2>City not found</h2>';
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};



form.addEventListener("submit", function(event) {
    event.preventDefault();
    getWeather(search.value)
});
