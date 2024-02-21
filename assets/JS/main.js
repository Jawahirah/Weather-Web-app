// URL
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = '&appid=3b6f4aadf8abf0852f8b4bdb3e80bade';
let zipCode = 0;

// Retrieve the user input
let submitButton =document.getElementById('submit-btn');
let date= new Date();

// When the user clicks the submit button, an HTTP request is sent to the OpenWeatherMap website
submitButton.addEventListener('click', () => {
    zipCode = document.getElementById('zip-code').value;
    weatherDetails(BASE_URL+zipCode+API_KEY).then((data)=>{
        document.querySelector('.temp').innerHTML=`${data.main.temp}°`;
        document.querySelector('.status').innerHTML=data.weather[0].description;
        document.querySelector('#date').innerHTML=`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `;
        document.querySelector('#pressure').innerHTML = data.main.pressure;
        document.querySelector('#humidity').innerHTML = data.main.humidity;
        document.querySelector('#windSpeed').innerHTML = data.wind.speed;
        document.querySelector('#weatherIcon').setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);        
    })
})


// Request
let weatherDetails = async (URL) => {
    const request = await fetch(URL);
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}