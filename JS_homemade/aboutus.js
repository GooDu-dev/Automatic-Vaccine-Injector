


contentMargin() 

function contentMargin(){
    let content = document.getElementById("content");
    let nav = document.getElementById("nav");
    let image = document.getElementById("op-image");
    if(window.innerWidth > 628){
        content.style.marginTop = nav.offsetHeight + "px"
    }
    else{
        content.style.marginTop = "0px"
    }
    image.style.height = window.innerHeight + 'px';
}
