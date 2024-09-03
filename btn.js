document.querySelector(".btn").addEventListener("click", function(){
    document.querySelector(".btnContent").classList.remove("btnContentNone");
})

document.querySelector(".btn").addEventListener("mouseout", function(){
    document.querySelector(".btnContent").classList.add("btnContentNone");
})
