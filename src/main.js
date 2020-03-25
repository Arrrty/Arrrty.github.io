'use strict';

var burger = document.querySelector(".menu__burger");
var menuContainer = document.querySelector(".flex-display > div");
var menu = document.querySelector("menu");
var main = document.querySelector(".main");
var mainOrder = document.querySelector(".main-order");
var mainEl = document.querySelector("main *");
var cities = document.querySelector(".search-cities input");
var citiesClose = document.querySelector(".search-cities svg");
var citiesList = document.querySelector(".search-cities__list");
var points = document.querySelector(".search-points input");
var pointsClose = document.querySelector(".search-points svg");
var pointsList = document.querySelector(".search-points__list");
var carsBlock = document.querySelector(".cars__block");
var infoBtn = document.querySelector(".info button");

window.onload = function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  });
};

burger.addEventListener('click', function(ev) {
  console.log(ev);
  let m;
  if (main !== null) {
    m = main;
  } else {
    m = mainOrder;
  }
  if (menu.style.display == 'none') {
    menuContainer.className = "menu__active";
    menu.style.display = 'block';
    m.style.backgroundColor = 'black';
    for (let i=0; i < m.children.length; i++) {
      m.children[i].style.opacity = 0;
    }
  } else if (menu.style.display == 'block') {
    menuContainer.className = "menu";
    m.style.backgroundColor = 'white';
    menu.style.display = 'none';
    for (let i=0; i < m.children.length; i++) {
      m.children[i].style.opacity = 1;
    }
  }
});

function fill() {
  let a = event.target;
  console.log(a);
  if (a.parentElement.parentElement.className == "search-cities__list") {
    cities.value = a.innerHTML;
    citiesList.style.display = "none";
    citiesClose.style.display = "block"
  } else {
    points.value = a.innerHTML;
    pointsList.style.display = "none";
    pointsClose.style.display = "block";
  }
}

function filter(type) {
  var filter, ul, li, a, i;

  if (type == 'cities') {
    citiesList.style.display = "flex";
    filter = cities.value.toUpperCase();
    ul = citiesList;
    li = ul.getElementsByTagName('li');
    if (cities.value !== "") {
      citiesClose.style.display = "block"
    } else {
      citiesClose.style.display = "none"
    }
  } else if (type == 'point') {
    pointsList.style.display = "flex";
    filter = points.value.toUpperCase();
    ul = pointsList;
    li = ul.getElementsByTagName('li');
    if (points.value !== "") {
      pointsClose.style.display = "block";
    } else {
      pointsClose.style.display = "none";
    }
  }
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    console.log(a)
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
  }
}

citiesClose.addEventListener('click', function(ev) {
  ev.preventDefault();
  cities.value = '';
  citiesClose.style.display = "none";
});

pointsClose.addEventListener('click', function(ev) {
  ev.preventDefault();
  points.value = '';
  pointsClose.style.display = "none";
});


let cars = document.querySelector(".cars");
cars.addEventListener('click', function(ev) {
  console.log(ev.target, ev.currentTarget);
  for (let i=0; i < cars.children.length; i++) {
    cars.children[i].className = "cars__block";
  }
  if (ev.target.tagName == "H2" || ev.target.tagName == "P") {
    ev.target.parentElement.parentElement.classList.add("cars__active");
  } else if (ev.target.tagName == "IMG") {
    ev.target.parentElement.classList.add("cars__active");
  } else {
    ev.target.classList.add("cars__active");
  }
}, true);

function popupShow() {
  let popup = document.querySelector(".popup");
  if (popup.style.display == 'none') {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
};