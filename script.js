'use strict';

let burger = document.querySelector(".burger");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".overlay .menu");

let isOpen = false;

burger.addEventListener('click', function () {
    isOpen = !isOpen;
    overlay.classList.toggle('open');

})