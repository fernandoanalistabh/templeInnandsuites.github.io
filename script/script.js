var date = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thirsday','Friday','Saturday');
var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
document.getElementById("currentDate").innerHTML = days[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

let saoPauloUrlCurrentApi = "http://api.openweathermap.org/data/2.5/weather?id=3448439&units=imperial&APPID=6c9bd331a857f7a81eb1d8c376e8d309";
let campinasUrlCurrentApi = "http://api.openweathermap.org/data/2.5/weather?id=3467865&units=imperial&APPID=6c9bd331a857f7a81eb1d8c376e8d309";
let curitibaUrlCurrentApi = "http://api.openweathermap.org/data/2.5/weather?id=6322752&units=imperial&APPID=6c9bd331a857f7a81eb1d8c376e8d309";
let recifeUrlCurrentApi = "http://api.openweathermap.org/data/2.5/weather?id=3445993&units=imperial&APPID=6c9bd331a857f7a81eb1d8c376e8d309";

let saoPauloWeatherRequest = new XMLHttpRequest();
saoPauloWeatherRequest.open('Get', saoPauloUrlCurrentApi, true);
saoPauloWeatherRequest.send();

saoPauloWeatherRequest.onload = function(){
    let weatherData = JSON.parse(saoPauloWeatherRequest.responseText);

    document.getElementById("sWeatherDesc").innerHTML = weatherData.weather[0].description;
    document.getElementById("sAirTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("sHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("sWindSpeed").innerHTML = weatherData.wind.speed;
    let windChill = 35.74 + Math.pow(0.6215, weatherData.main.temp_max) - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp_max * Math.pow(weatherData.wind.speed, 0.16);
    document.getElementById("sWindChill").innerHTML = parseFloat(windChill.toFixed(2));
}

let campinasWeatherRequest = new XMLHttpRequest();
campinasWeatherRequest.open('Get', campinasUrlCurrentApi, true);
campinasWeatherRequest.send();

campinasWeatherRequest.onload = function(){
    let weatherData = JSON.parse(campinasWeatherRequest.responseText);

    document.getElementById("caWeatherDesc").innerHTML = weatherData.weather[0].description;
    document.getElementById("caAirTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("caHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("caWindSpeed").innerHTML = weatherData.wind.speed;
    let windChill = 35.74 + Math.pow(0.6215, weatherData.main.temp_max) - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp_max * Math.pow(weatherData.wind.speed, 0.16);
    document.getElementById("caWindChill").innerHTML = parseFloat(windChill.toFixed(2));
}

let curitibaWeatherRequest = new XMLHttpRequest();
curitibaWeatherRequest.open('Get', curitibaUrlCurrentApi, true);
curitibaWeatherRequest.send();

curitibaWeatherRequest.onload = function(){
    let weatherData = JSON.parse(curitibaWeatherRequest.responseText);

    document.getElementById("cuWeatherDesc").innerHTML = weatherData.weather[0].description;
    document.getElementById("cuAirTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("cuHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("cuWindSpeed").innerHTML = weatherData.wind.speed;
    let windChill = 35.74 + Math.pow(0.6215, weatherData.main.temp_max) - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp_max * Math.pow(weatherData.wind.speed, 0.16);
    document.getElementById("cuWindChill").innerHTML = parseFloat(windChill.toFixed(2));
}

let recifeWeatherRequest = new XMLHttpRequest();
recifeWeatherRequest.open('Get', recifeUrlCurrentApi, true);
recifeWeatherRequest.send();

recifeWeatherRequest.onload = function(){
    let weatherData = JSON.parse(recifeWeatherRequest.responseText);

    document.getElementById("rWeatherDesc").innerHTML = weatherData.weather[0].description;
    document.getElementById("rAirTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("rHumidity").innerHTML = weatherData.main.humidity;
    document.getElementById("rWindSpeed").innerHTML = weatherData.wind.speed;
    let windChill = 35.74 + Math.pow(0.6215, weatherData.main.temp_max) - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp_max * Math.pow(weatherData.wind.speed, 0.16);
    document.getElementById("rWindChill").innerHTML = parseFloat(windChill.toFixed(2));
}