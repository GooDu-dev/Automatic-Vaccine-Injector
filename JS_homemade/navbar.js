toggleNav_status = true

window.onscroll = function(){
    checkPosNav()
}
function toggleNavbar(){
    let nav = document.getElementById("nav");
    let toggle = document.getElementById("toggle")
    if(!toggleNav_status){
        nav.style.right = "0px"
    }
    else{
        nav.style.right = -nav.offsetWidth + "px"
    }
    toggleNav_status = !toggleNav_status;
}
if(window.innerWidth < 628){
    toggleNavbar();
}

let prevPos = document.documentElement.scrollTop;
function checkPosNav(){
    let nav = document.getElementById("nav");
    let currentPos = document.documentElement.scrollTop;
    // * Scroll Down
    if(currentPos > prevPos){
        if(window.innerWidth > 628){
            nav.style.top = -nav.offsetHeight + "px";
        }        
        else{
            nav.style.right = -nav.offsetWidth + "px";
        }
    }
    // * Scroll Top
    else{
        if(window.innerWidth > 628){
            nav.style.top = "0px";
        }
        else{
            nav.style.right = -nav.offsetWidth + "px";
        }
    }
    prevPos = currentPos;
}