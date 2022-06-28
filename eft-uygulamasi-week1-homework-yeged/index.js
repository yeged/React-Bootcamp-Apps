import { infos } from './user_information';


let button = document.querySelector("#send")
let accounts = document.querySelector("#accounts")
let iban = document.querySelector("#iban")
let amount = document.querySelector("#amount")
let error = document.querySelector("#error")
let modal = document.querySelector("#myModal")
let password = document.querySelector("#password")
let closeButton = document.querySelector("#close")
let confirmButton = document.querySelector("#confirm")
let errorPassword = document.querySelector("#errorPassword")

// Hesap - Bakiye Dropdown

function addAccount(id){
    let acc = document.createElement("option") 
    let index = infos.findIndex(value => value.id === id)
    acc.value = infos[index].bakiye
    acc.innerText = `${infos[index].hesap} - ${infos[index].bakiye} ₺`
    accounts.appendChild(acc)
    
}

infos.forEach(info => {
    addAccount(info.id)
})

// onChange Handler && Validation

function handleOnChange(event) {
    var selectElement = event.target;

    // Dropdown - Text box - Numeric box
    if(selectElement.id === "accounts"){
        accounts.value = selectElement.value;
    }else if(selectElement.id === "iban"){
        iban.value = selectElement.value
    }else{
        amount.value = selectElement.value
    }

    // Validation
    if(accounts.value === "0" || iban.value.length != 24 || amount.value.length === 0){
        button.disabled = true
    }else{
        if(+accounts.value >= +amount.value){ // bakiye miktardan fazla
            error.innerText = " "
            button.disabled = false
        }else{ // bakiye miktardan az
            error.innerText = "Bakiye Yetersiz"
            button.disabled = true
        }      
    }
}

accounts.addEventListener("change", handleOnChange)
iban.addEventListener("change", handleOnChange)
amount.addEventListener("change", handleOnChange)

// Buttons 

function closeModal(){
    modal.style.display = "none"
}

closeButton.addEventListener("click", closeModal)

function sendHandler(e){
    if(amount.value <= 500){
        alert("Başarılı")
    }else{
        modal.style.display = "block"
        e.preventDefault()
    }
}

button.addEventListener("click", sendHandler)

//  Password Validation 

function onPassword(event){
    let selectedPassword = event.target.value
    password.value = selectedPassword
}

password.addEventListener("change", onPassword)

let count = 2;

function onConfirmPassword(){
    
    if(password.value === "1234"){
        alert("Başarılı")
        window.location.reload();
    }else{
        if(count !== 0){
            errorPassword.innerHTML = `Şifreniz yanlış ${count} deneme kaldı`
            count -= 1; 
        }else{
            alert("Hesabınız Bloke Edildi")
            window.location.reload();
        }
    }
} 

confirmButton.addEventListener("click", onConfirmPassword )

// Enter Key

password.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        confirmButton.click();
    }
});

// Countdown Timer

let timer = document.querySelector('#time');

function startTimer(duration) {
    let time = duration,
     minutes, 
     seconds;
    setInterval(function () {
        minutes = parseInt(time / 60, 10); // verilen saniye içinde kaç dakika var 
        seconds = parseInt(time % 60, 10); // dakika sonrası kalan saniye

        minutes = minutes < 10 ? `0${minutes}` : minutes; // başa 0 koyma
        seconds = seconds < 10 ? `0${seconds}` : seconds; 

        timer.innerText = `${minutes}:${seconds}`;

        time -=  1

        if (time < 0 ) {
            window.location.reload();
            alert("Oturumunuz Sonlanmıştır")
        }
    }, 1000);
}
``
window.onload = function () {
    var twoMinutes = 120
    startTimer(twoMinutes);
};