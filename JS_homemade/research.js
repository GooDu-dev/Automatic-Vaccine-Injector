

window.addEventListener("mousemove", function(){
    line()
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

function line(){
    let element = document.getElementById('header');

    element.classList.add('line')
}