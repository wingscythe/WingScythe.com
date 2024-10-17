function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if(document.getElementById("overlay")==null){
    hidetoggle(document.getElementById("wrapper"));
}else if(document.cookie.includes("visit=true")){
    hidetoggle(document.getElementById("wrapper"));
    var overlay = document.getElementById("overlay");
    overlay.parentElement.removeChild(overlay);
}

function overtoggle(){
    console.log("Welcome");
    document.cookie = "visit=true; path=/"
    var overlay = document.getElementById("overlay");
    overlay.parentElement.removeChild(overlay);
    hidetoggle(document.getElementById("wrapper"));
}

function hidetoggle(elem){
    var url = window.location.pathname;
    if(url.substring(url.lastIndexOf('/')+1)=="index.html" || url.substring(url.lastIndexOf('/')+1)==""){
        elem.style.animation= "fadein 2s";
    }
    elem.style.visibility="visible";
}

function collapse(col) {
    col.classList.toggle("active");
    var postDiv = col.nextElementSibling;
    if (postDiv.style.display === "block") {
      postDiv.style.display = "none";
    } else {
      postDiv.style.display = "block";
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Displays proper underneath class.
function showClasses(){
    var unders = document.getElementsByClassName("underSlide");
    if(unders.length<slideIndex){
        return;
    }
    for (var i = 0; i < unders.length; i++) {
        unders[i].style.display = "none";
    }
    unders[slideIndex-1].style.display = "inline";
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(slides.length==0){
        return;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    showClasses();
}


if(document.getElementsByClassName("mySlides").length > 0){
    let n = getParameterByName('n');
    console.log("n: " + n);
    if(n){
        n = parseInt(n);
        currentSlide(n);
    }
}