var little1 = document.querySelector('.carousel-little');
var little2 = document.querySelector('.carousel-little-2');
var big= document.querySelector('.carousel-big');
var fade = document.querySelector('.carousel');
var video1 = document.querySelector("body .video-1");
var video2 = document.querySelector("body .video-2");
var video3 = document.querySelector("body .video-3");
var video4 = document.querySelector("body .video-4");
var panier = document.querySelector("body .panier");

var littleOn = 0;

var burgermenuOpen = 0;

var SearchCheck = 0;


document.getElementById("onglet-1").onmouseover = function() {
    document.getElementById("onglet-1-span").classList.add('navbarspan-open');
}
document.getElementById("onglet-1").onmouseout  = function() {
    document.getElementById("onglet-1-span").classList.remove('navbarspan-open');
}


document.getElementById("onglet-2").onmouseover = function() {
        document.getElementById("onglet-2-span").classList.add('navbarspan-open');        
    }
    
document.getElementById("onglet-2").onmouseout  = function() {
        document.getElementById("onglet-2-span").classList.remove('navbarspan-open');
    }


document.getElementById("onglet-3").onmouseover = function() {
    document.getElementById("onglet-3-span").classList.add('navbarspan-open');
}
document.getElementById("onglet-3").onmouseout  = function() {
    document.getElementById("onglet-3-span").classList.remove('navbarspan-open');
}

document.getElementById("onglet-4").onmouseover = function() {
    document.getElementById("onglet-4-span").classList.add('navbarspan-open');
}
document.getElementById("onglet-4").onmouseout  = function() {
    document.getElementById("onglet-4-span").classList.remove('navbarspan-open');
}

document.getElementById("onglet-5").onmouseover = function() {
    document.getElementById("onglet-5-span").classList.add('navbarspan-open');
}
document.getElementById("onglet-5").onmouseout  = function() {
    document.getElementById("onglet-5-span").classList.remove('navbarspan-open');
}


function burgerMenu(){
    if(burgermenuOpen == 0){
        document.getElementById("burgermenu").classList.add('menu-burger-active');
        document.getElementById("navbar").classList.add('open');
        burgermenuOpen = 1;
        return;
    } if(burgermenuOpen == 1) {
        document.getElementById("burgermenu").classList.remove('menu-burger-active');
        document.getElementById("navbar").classList.remove('open');
        burgermenuOpen = 0;
    }
}

panier.addEventListener("mouseover", function() {
    var ShopList = document.getElementById("ShopList");
    ShopList.classList.remove("shopslideoff");
    ShopList.classList.add("ShopList");
});
panier.addEventListener("mouseout", function() {
    var ShopList = document.getElementById("ShopList");
    ShopList.classList.add("shopslideoff");
    ShopList.classList.remove("ShopList");
});

function Search(){
    if(SearchCheck == 0){
        document.getElementById("SearchID").classList.remove('-hidden');
        document.getElementById("SearchID").classList.add('SearchCont');
        document.getElementById("onglet-2-span").classList.add('-hiddenspan')
        SearchCheck = 1;
        return;
    } if(SearchCheck == 1) {
       document.getElementById("SearchID").classList.add('-hidden');
        document.getElementById("SearchID").classList.remove('SearchCont');
        document.getElementById("onglet-2-span").classList.remove('-hiddenspan')
        SearchCheck = 0;
    }
}


function searchValidate(){
        document.getElementById("SearchID").classList.add('-hidden');
        document.getElementById("SearchID").classList.remove('SearchCont');
        document.getElementById("onglet-2-span").classList.remove('-hiddenspan')
        SearchCheck = 0;
}


window.addEventListener('click', function(e){
    if(SearchCheck == 1){
      if (document.getElementById('navbar').contains(e.target)){
      } else{
        document.getElementById("SearchID").classList.add('-hidden');
        document.getElementById("SearchID").classList.remove('SearchCont');
        document.getElementById("onglet-2-span").classList.remove('-hiddenspan')
        SearchCheck = 0;
      }
    }
});
