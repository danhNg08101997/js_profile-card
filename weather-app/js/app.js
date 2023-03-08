let weatherContent = document.querySelector(".weather__content");
let weatherSearch = document.querySelector(".weather__search input");
let cityLocation = document.querySelector(".location__city");
let countryLocation = document.querySelector(".location__country");
let weatherTime = document.querySelector(".weather__time");
let weatherTemp = document.querySelector(".weather__temperature span");
let weatherDesc = document.querySelector(".weather__desc");
let visibility = document.querySelector(".visibility span");
let wind = document.querySelector(".wind span");
let humidity = document.querySelector(".humidity span");
let body = document.querySelector("body");

async function weatherApp(valueSearch) {

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearch}&appid=444f0d64b175f52cc959c94fc6951d43`;

  let weatherData = await fetch(apiURL).then((res) => res.json());

  if (weatherData.cod === 200) {
    weatherContent.classList.remove("hide");
    cityLocation.innerText = weatherData.name;
    countryLocation.innerText = weatherData.sys.country;
    weatherTime.innerText = new Date().toLocaleString(
      `${weatherData.sys.country}`
    );
    let tempValue = Math.round(weatherData.main.temp - 272.15);
    weatherTemp.innerHTML = tempValue + `<sup>o</sup>C`;
    weatherDesc.innerText = weatherData.weather[0]
      ? weatherData.weather[0].main
      : "";
    visibility.innerText = `${weatherData.visibility} (m)`;
    wind.innerText = `${weatherData.wind.speed} (m/s)`;
    humidity.innerText = `${weatherData.main.humidity} (%)`;
    if (tempValue > 25) {
      body.setAttribute("class", "hot");
    } else if (tempValue > 20 && tempValue < 25) {
      body.setAttribute("class", "warm");
    } else if (tempValue > 10 && tempValue < 20) {
      body.setAttribute("class", "cool");
    } else {
      body.setAttribute("class", "cold");
    }
  } else {
    weatherContent.classList.add("hide");
  }
}

weatherApp('Ho chi minh')

weatherSearch.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let valueSearch = weatherSearch.value.trim();
    weatherApp(valueSearch);
  }
});
