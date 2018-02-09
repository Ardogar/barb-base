var link = document.querySelector(".user-block__link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var map = document.querySelector(".modal-map");
var storage = localStorage.getItem("login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var maplink = document.querySelector(".btn-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");



link.addEventListener("click", function(evt) {
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

maplink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});
closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
