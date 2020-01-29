var link = document.querySelector(".hidden-menus__bag");
var popup = document.querySelector(".modal-content__basket");
var close = popup.querySelector(".modal-content__basket-close");


var menuOpen = document.querySelector(".hidden-menus__logo");
var popupMenu = document.querySelector(".modal-content__menu");
var closeMenu = popupMenu.querySelector(".modal-content__menu-close");

var languageOpen = document.querySelector(".hidden-menus__menu");
var popupLanguage = document.querySelector(".modal-content__language-selector");

var socialOpen = document.querySelector(".hidden-menus__social");
var popupSocial = document.querySelector(".modal-content__social");

var searchOpen = document.querySelector(".hidden-menus__search");
var popupSearch = document.querySelector(".modal-content__search");

var catalogTop = document.querySelector(".catalog-item__top");
var catalogTopSubtipe = document.querySelector(".catalog-item__top-subtipe");

var catalogTShirt = document.querySelector(".catalog-item__t-shirt-and-blouses");
var catalogTShirtSubtipe = document.querySelector(".catalog-item__t-shirt-subtipe");
  
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.style.display = "flex";
});
  
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.style.display = "none";
});


menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMenu.style.display = "flex";
});

closeMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMenu.style.display = "none";
});

languageOpen.onclick = function() {
    if (popupLanguage.style.display !== 'none') {
        popupLanguage.style.display = 'none';
    }
    else {
        popupLanguage.style.display = 'block';
    }
};

socialOpen.onclick = function() {
    if (popupSocial.style.display !== 'none') {
        popupSocial.style.display = 'none';
    }
    else {
        popupSocial.style.display = 'flex';
    }
};

searchOpen.onclick = function() {
    if (popupSearch.style.display !== 'none') {
        popupSearch.style.display = 'none';
    }
    else {
        popupSearch.style.display = 'flex';
    }
};


catalogTop.onclick = function() {
    if (catalogTopSubtipe.style.display !== 'none') {
        catalogTopSubtipe.style.display = 'none';
    }
    else {
        catalogTopSubtipe.style.display = 'block';
    }
};

catalogTShirt.onclick = function() {
    if (catalogTShirtSubtipe.style.display !== 'none') {
        catalogTShirtSubtipe.style.display = 'none';
    }
    else {
        catalogTShirtSubtipe.style.display = 'block';
    }
};
