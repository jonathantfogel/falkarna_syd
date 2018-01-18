var header = document.getElementsByTagName("header")[0];
var headerSection = document.getElementsByClassName("headerSection");
var promotionBtn = document.getElementsByClassName("promotionBtn");
var promoPlaceholder = document.getElementById("promoPlaceholder");
var backImg = document.getElementsByClassName("background");
var imgIdx = 0;
var images = ["back1.jpg", "back2.jpg"];

slideShow(false);

/*var currentScrollPos = document.documentElement.scrollTop;
var isTrue = true;*/

/*document.body.onscroll = function () {
    if (document.documentElement.clientWidth > 1000) {
        if (document.documentElement.scrollTop > 0) {
            for (var i = 0; i < headerSection.length; i++) {
                headerSection[i].classList.add("scroll");
                promotionBtn[i].classList.add("scroll");
            }
            headerSection[1].classList.add("float-right");
            document.getElementsByTagName("header")[0].classList.add("scroll");
        } else {
            for (var i = 0; i < headerSection.length; i++) {
                headerSection[i].classList.remove("scroll");
                promotionBtn[i].classList.remove("scroll");
            }
            headerSection[1].classList.remove("float-right");
            document.getElementsByTagName("header")[0].classList.remove("scroll");
        }
    } else {
        if (document.documentElement.scrollTop > headerSection[0].offsetHeight) {
            header.style.position = "fixed";
            header.style.top = "-" + headerSection[0].offsetHeight + "px";
        } else {
            header.style.position = "absolute";
            header.style.top = "0";
        }
    }*/
    /*if (document.documentElement.scrollTop < currentScrollPos) {
        if (isTrue == true) {
            header.style.position = "absolute";
            header.style.top = document.documentElement.scrollTop - headerSection[0].offsetHeight + "px";
            isTrue = false;
        }
    } else {
        istrue = true;
    }
    currentScrollPos = document.documentElement.scrollTop;*/

document.body.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll")
    }
}

function slideShow(x) {
    if (x == null) {
        for (var i = 0; i < backImg.length; i++) {
            backImg[i].style.opacity = "0";
        }
    }
    imgIdx++;
    if (imgIdx > backImg.length - 1) { imgIdx = 0 }
    backImg[imgIdx].style.opacity = "1";
    setTimeout(slideShow, 5000);
}