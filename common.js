document.body.onresize = bodyResize;

var header = document.getElementsByTagName("header")[0];
var headerSection = document.getElementsByClassName("headerSection");
var promotionBtn = document.getElementsByClassName("promotionBtn");
var promoPlaceholder = document.getElementById("promoPlaceholder");
var backImg = document.getElementsByClassName("background");
var mediaCanvasCont = document.getElementById("mediaCanvasCont");
var mediaCanvasWrap = document.getElementById("mediaCanvasWrap");
var mediaCanvas = document.getElementById("mediaCanvas");
var promotionBtn = document.getElementsByClassName("promotionBtn");
var imgSource;

var backupidx;
var imgIdx = 0;
var imgCanvas = document.getElementsByClassName("imgCanvas");
var imgGallery = [
    "gal1.jpg",
    "gal2.jpg",
    "gal3.jpg",
    "gal4.jpg",
    "gal5.jpg",
    "gal6.jpg",
    "gal7.jpg",
    "gal8.jpg",
    "gal9.jpg",
    "gal10.jpg",
    "gal11.jpg",
];
var galIdx = 0;
var imgIdxel = document.getElementsByClassName("imgIdx");

bodyResize();
slideShow(false);

document.body.onscroll = function () {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
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
        imgIdx++;
        if (imgIdx > backImg.length - 1) { imgIdx = 0 }
        backImg[imgIdx].style.opacity = "1";
    }
    setTimeout(slideShow, 5000);
}

function nextImg(canvasidx) {
    galIdx++;
    if (galIdx > imgGallery.length - 1) { galIdx = 0 }
    if (canvasidx == 0) { imgSource = "Resources/Gallery/gal" } else { imgSource = "Resources/Gallery/mGal/gal" }
    imgCanvas[canvasidx].style.backgroundImage = "url(" + imgSource + (galIdx + 1) + ".jpg)";
    imgIdxel[canvasidx].innerHTML = (galIdx + 1) + "/" + imgGallery.length;
}
function prevImg(canvasidx) {
    galIdx--;
    if (galIdx < 0) { galIdx = imgGallery.length - 1 }
    if (canvasidx == 0) { imgSource = "Resources/Gallery/gal" } else { imgSource = "Resources/Gallery/mGal/gal" }
    imgCanvas[canvasidx].style.backgroundImage = "url(" + imgSource + (galIdx + 1) + ".jpg)";
    imgIdxel[canvasidx].innerHTML = (galIdx + 1) + "/" + imgGallery.length;
}

function openCanvas() {
    backupidx = galIdx;
    document.body.style.overflow = "hidden";
    mediaCanvasCont.style.display = "block";
    mediaCanvas.style.backgroundImage = "url(Resources/Gallery/gal" + (galIdx + 1) + ".jpg)";
    imgIdxel[0].innerHTML = (galIdx + 1) + "/" + imgGallery.length;
    canvasResize();
}
function closeCanvas() {
    galIdx = backupidx;
    document.body.style.overflow = "auto";
    mediaCanvasCont.style.display = "none";
    mediaCanvas.style.backgroundImage = "";
}

function bodyResize() {
    canvasResize();
}

function canvasResize() {
    if (window.innerWidth > 800) {
        if (window.innerHeight < window.innerWidth * 0.5625) {
            mediaCanvas.style.height = "80%";
            //mediaCanvas.style.width = "auto";
            mediaCanvas.style.paddingBottom = "0px";
            mediaCanvasWrap.style.width = mediaCanvas.offsetHeight * 1.778 + "px";
        } else {
            mediaCanvas.style.height = "auto";
            mediaCanvas.style.width = "100%";
            mediaCanvas.style.paddingBottom = "56.25%";
            mediaCanvasWrap.style.width = "80%";
        }
    } else {
        if (window.innerHeight < window.innerWidth * 0.5625) {
            mediaCanvas.style.height = "100%";
            mediaCanvas.style.width = "auto";
            mediaCanvas.style.paddingBottom = "0px";
            mediaCanvasWrap.style.width = imgCanvas.offsetHeight * 1.778 + "px";

        } else {
            mediaCanvas.style.height = "auto";
            mediaCanvas.style.width = "100%";
            mediaCanvas.style.paddingBottom = "56.25%";
            mediaCanvasWrap.style.width = "100%";
        }
    }
}