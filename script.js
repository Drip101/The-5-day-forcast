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

let userInput=document.querySelector("input")
let searchbtn=document.getElementById("search")
let history=document.getElementById("history")
searchbtn.addEventListener("click", ()=>{
createbtn()
})
function createbtn(){
let newbtn=document.createElement("button")
newbtn.innerText=userInput.value
history.appendChild(newbtn)
}