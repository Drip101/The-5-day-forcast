//const userInput = document.querySelector('#input')
//const submitBtn = document.querySelector('#submit')

// localStorage.getItem(prop1)
/*submitBtn.addEventListener('click', function() {
    let text = userInput.value
    localStorage.setItem('city', text)
} )

fetch('https://api.github.com/users/latinobull/repos').then((data) => {
    return data.json()
}).then((data) => {
    console.log(data)
    console.log(data[3].name)
})

console.log(localStorage.getItem('city'))*/

//api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=00155ff66eca5e916eeb91e633dbb8f0

let userInput = document.querySelector("input")
let searchbtn = document.getElementById("search")
let history = document.getElementById("history")
let _s = e => document.querySelector(e)
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const API = "00155ff66eca5e916eeb91e633dbb8f0"
searchbtn.addEventListener("click", () => {
    createbtn()
    getcity(userInput.value)
})
function createbtn() {
    let newbtn = document.createElement("button")
    newbtn.innerText = userInput.value
    history.appendChild(newbtn)
    newbtn.addEventListener("click", () => {
        getcity(newbtn.innerText)
    })
}
//if the weather in the object matches rain it will show the rain image.
function getImage(a){
    return a==="Rain"?"rainy": a==="Clouds"?"cloudy":a==="Sun"?"sunny":"calm"
}
//added statuses of the weather to display for user on the screen.
function createData(data) {
    console.log(data);
    //added current date
    _s('#city').textContent = data.city.name+" ("+data.list[0].dt_txt.split(" ")[0]+")"
    _s("#temp").innerHTML = "temp: " + data.list[0].main.temp + "&deg;F"
    _s("#wind").textContent = "wind: " + data.list[0].wind.speed + "MPH"
    _s("#hum").textContent = "humidity: " + data.list[0].main.humidity + " %"
    _s("#img").src=getImage(data.list[0].weather[0].main)+".png"
    _s("#futureConditions").innerHTML = ""
    for (let i = 0; i <= 4; i++) {
        let div = document.createElement("div")
        div.innerHTML = `
  <h4>${data.list[i * 8].dt_txt.split(" ")[0]}</h4>
  <img src="${getImage(data.list[i*8].weather[0].main)}.png">
<p>Temp: ${data.list[i * 8].main.temp}&deg;F</p>
<p>Wind: ${data.list[i * 8].wind.speed} MPH</p>
<p>Humidity: ${data.list[i * 8].main.humidity} %</p>
  `
  console.log(i*8);
        _s("#futureConditions").append(div)
    }
}

function getcity(city) {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`).then(response => response.json()).then(a => getWeather(a[0].lat, a[0].lon))
}
function getWeather(la, lo) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${la}&lon=${lo}&appid=${API}`).then(response => response.json()).then(a => createData(a))
}

_s("#clear").addEventListener("click", ()=>{
    _s("#history").innerHTML=""
})