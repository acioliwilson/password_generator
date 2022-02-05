// Navbar toggle
const button = document.querySelector('.toggle-navigation');
const nav = document.querySelector('.header__navigation');

button.addEventListener('click', () => {
    nav.classList.toggle('nav-on');
    button.classList.toggle('btn-on');
});

// Password Generate
var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}

// Copyright Year
const year = new Date().getFullYear();
const span = document.querySelector('.year');
span.innerHTML = year;