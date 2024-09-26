let img = document.getElementById('portada');

img.addEventListener("mouseover", function(){
	img.classList.remove("img2");
	img.classList.add("img1");
})

img.addEventListener("mouseout", function(){
	img.classList.add("img2");
	img.classList.remove("img1");
})