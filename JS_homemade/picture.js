

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
countImage = 0;
function slider(){
	let image = document.getElementsByClassName("img");
	let i;
	for(i=0; i<image.length; i++){
		image[i].style.display = "none";
	}
	countImage++;
	if(countImage > image.length){
		countImage=1;
	}
	image[countImage-1].style.display = "initial";
	setTimeout(slider, 1500);
}
function slider2(){
	let image = document.getElementsByClassName("img2");
	let i;
	for(i=0; i<image.length; i++){
		image[i].style.display = "none";
	}
	countImage++;
	if(countImage > image.length){
		countImage=1;
	}
	image[countImage-1].style.display = "initial";
	setTimeout(slider, 1500);
}
function slider3(){
	let image = document.getElementsByClassName("img3");
	let i;
	for(i=0; i<image.length; i++){
		image[i].style.display = "none";
	}
	countImage++;
	if(countImage > image.length){
		countImage=1;
	}
	image[countImage-1].style.display = "initial";
	setTimeout(slider, 1500);
}
slider();
slider2();
slider3();