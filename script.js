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

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

let userInput = document.querySelector("input")
let searchbtn = document.getElementById("search")
let history = document.getElementById("history")
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
}
function getcity(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`).then(response => response.json()).then(a => console.log(a))
}