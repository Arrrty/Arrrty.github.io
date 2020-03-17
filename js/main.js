'use strict';

var burger = document.querySelector(".menu__burger");
var menuContainer = document.querySelector(".flex-display > div");
var menu = document.querySelector("menu");
var main = document.querySelector("main");
var mainEl = document.querySelector("main *");


window.onload = function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    })

    // mySwiper.destroy (cleanStyles);
  };

burger.addEventListener('click', function(ev) {
  console.log(ev)
  if (menu.style.display == 'none') {
    menuContainer.className = "menu__active";
    menu.style.display = 'block'
    main.style.backgroundColor = 'black';
    for (let i=0; i < main.children.length; i++){
      main.children[i].style.opacity = 0;
    }
  } else if (menu.style.display == 'block') {
    menuContainer.className = "menu";
    main.style.backgroundColor = 'white';
    menu.style.display = 'none'
    for (let i=0; i < main.children.length; i++){
      main.children[i].style.opacity = 1;
    }
  }
});