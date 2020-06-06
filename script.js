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
    elem.style.visibility="visible";
}