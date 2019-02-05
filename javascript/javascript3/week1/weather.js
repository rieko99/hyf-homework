let input = document.createElement("input");
document.body.appendChild(input);
input.setAttribute('type', "text")
input.setAttribute('value', "copenhagen")
let submitCity = document.createElement("button")
document.body.appendChild(submitCity);
submitCity.innerHTML = "Submit a City";
let temp = document.getElementsByClassName('temp')[0];
let wind = document.getElementsByClassName('wind')[0];
let rain = document.getElementsByClassName('rain')[0];
let claud = document.getElementsByClassName('claud')[0];

let address = {
  p1:"https://api.openweathermap.org/data/2.5/weather?q=",
  city: "copenhagen",
  p2: "&appid=45b1dd4a0e61928169f56a4ca78ee58a"
}

let temphtml = temp.innerHTML;
let windhtml = wind.innerHTML;
let claudhtml = claud.innerHTML;
let rainhtml = rain.innerHTML;


submitCity.addEventListener('click', (newCity) => {
  address.city = input.value;
  if (input.value === "") {
    console.log("The weather in Nowhere is out of our service");
  }
  else {
    fetch(address.p1 + address.city + address.p2)
    .then(response => response.json())
    .then((city) => {
      return  console.log(city), console.log(address),
      temp.innerHTML = temphtml + city.main.temp, wind.innerHTML = windhtml + city.wind.speed, rain.innerHTML = rainhtml + city.weather[0].description, claud.innerHTML = claudhtml + city.clouds.all;
    })
  }
})
