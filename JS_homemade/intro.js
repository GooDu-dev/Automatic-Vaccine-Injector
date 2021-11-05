

function ReSize(){
    let width_window = window.innerWidth;
    let height_window = window.innerHeight;

    let opContainer = document.getElementById("open");

    let nav = document.getElementById("nav");

    let op_size = height_window - nav.offsetHeight;

    if(width_window > 628){
        opContainer.style.height = op_size + "px";
    }
    else{
        opContainer.style.height = height_window + "px"
    }
}
ReSize();
