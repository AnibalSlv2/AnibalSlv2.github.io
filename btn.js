var btn = document.querySelector(".btn");
var btnOne = document.querySelector(".btnOne");
var btnTwo = document.querySelector(".btnTwo");

btnOne.addEventListener("mouseover", function(){
    document.querySelector(".btnContent").classList.remove("btnContentNone");
})

btnTwo.addEventListener("mouseover", function(){
    document.querySelector(".btnContentDos").classList.remove("btnContentNone");
})

btnOne.addEventListener("mouseout", function(){
    document.querySelector(".btnContent").classList.add("btnContentNone");
})

btnTwo.addEventListener("mouseout", function(){
    document.querySelector(".btnContentDos").classList.add("btnContentNone");
})

//-------------------------Pasar de Pag-------------------------

btnOne.addEventListener("mouseover", function(){
    btnOne.classList.add("none");
    btnTwo.classList.remove("none");
    document.querySelector(".partOne").classList.add("none");
    document.querySelector(".partOne").classList.remove("flex");
    document.querySelector(".partTwo").classList.add("flex");
    document.querySelector(".partTwo").classList.remove("none");
})

btnTwo.addEventListener("mouseover", function(){
    btnOne.classList.remove("none");
    btnTwo.classList.add("none");
    document.querySelector(".partOne").classList.remove("none");
    document.querySelector(".partOne").classList.add("flex");
    document.querySelector(".partTwo").classList.add("none");
    document.querySelector(".partTwo").classList.remove("flex");
})