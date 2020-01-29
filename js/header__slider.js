let slider = document.querySelector(".page-header__slider");
var pageHeader = document.querySelector(".page-header");

var nextButton = slider.querySelector(".page-header__button--next");
var backButton = slider.querySelector(".page-header__button--previous");

let counter = 1;

let nextButtonHandler = function (e) {
    counter++;
    if (counter>3) {
        counter=1;
    }
    let element = document.getElementById("product-"+ counter);
    element.checked=true;
}

let backButtonHandler = function (e) {
    counter--;
    if (counter<1) {
        counter=3;
    }
    let element = document.getElementById("product-"+ counter);
    element.checked=true;
}