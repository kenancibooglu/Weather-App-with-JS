const apiKey = "99b04049a3f9bc023b20984f5fcfe854";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city) {
    // fetch ile apiUrl'nin varlığını kontrol ediyoruz.
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}` );
    let data = await response.json();

    // api'den çektiğimiz verileri ekrana yazdırıyoruz.
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // hava durumuna göre ekranı güncelleyelim
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }else if (data.weather[0] == "Rain") {
        weatherIcon.src = "images/rain.png";
    }else if (data.weather[0] == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }else if (data.weather[0] == "Mist") {
        weatherIcon.src ="images/mist.png";
    }

    


    
}

searchBtn.addEventListener("click", () =>  {
    checkWeather(searchBox.value);
})
