

window.addEventListener('scroll', function(){
    linePlus()
})

contentMargin()

function contentMargin(){
    let content = document.getElementById("content");
    let nav = document.getElementById("nav");
    if(window.innerWidth > 628){
        content.style.marginTop = nav.offsetHeight*2 + "px"
    }
    else{
        content.style.marginTop = nav.offsetWidth+ "px"
    }
}

function linePlus(){
    let element = document.getElementById("head_text");
    element.classList.add("linePlus");
    console.log("linePlus")
}