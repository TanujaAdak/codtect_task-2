const apikey = "b88be1a59dd9473039e2f3d9764c637e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=raipur";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);




document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + " °C ";
document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

}
checkWeather();