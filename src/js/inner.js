var innerlink = document.querySelector(".user-innerblock__link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var storage = localStorage.getItem("login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");



innerlink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
    if (localStorage) {
      login.value = storage;
      password.focus();
    }
    else {
      login.focus();
    }
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt){
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("login", login.value)
  }
});
window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27){
    if(popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});