
let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ,"Pazar"]


let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

var name = prompt("İsim Giriniz")

function timer(){
    let hour = new Date().getHours().toString()
    let minute = new Date().getMinutes().toString()
    let second = new Date().getSeconds().toString()
    let day = new Date().getDay().toString()
    myClock.innerHTML = `${hour}:${minute}:${second}  ${days[day]}`
}

timer();

myName.innerHTML = name
setInterval(timer, 1000)
console.log(myName)