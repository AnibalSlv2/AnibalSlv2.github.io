var btnRotate = document.querySelector(".btnRotate")

document.querySelector(".btn").addEventListener("click", function(){
    document.querySelector(".btnContent").classList.remove("btnContentNone");
})

document.querySelector(".btn").addEventListener("mouseout", function(){
    document.querySelector(".btnContent").classList.add("btnContentNone");
    btnRotate.classList.remove("btnRotateNone");
})


document.querySelector(".btnRotate").addEventListener("mouseover", function(){
    btnRotate.classList.add("btnRotateNone");
})