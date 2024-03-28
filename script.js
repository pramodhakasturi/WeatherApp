const apiKey ="6097d7b0e2234c3b308bda32e0035f05";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcons= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`)
    if(response.status === 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }else{
        var data = await response.json();

        console.log(data)
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML =data.main.temp_min+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h"
    
        if(data.weather[0].main === "Clouds"){
             weatherIcons.scr ="images/clouds.png"
        }else if(data.weather[0].main === "Clear"){
            weatherIcons.src="images/clear.png"
        }else if(data.weather[0].main === "Rain"){
            weatherIcons.src="images/rain.png"
        }else if(data.weather[0].main === "Drizzle"){
            weatherIcons.src="images/Drizzle.png"
        }else if(data.weather[0].main === "Mist"){
            weatherIcons.src="images/mist.png"
        }
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
    }
    }
   
serachBox.addEventListener("click",()=>{checkWeather(serachBox.value)})
