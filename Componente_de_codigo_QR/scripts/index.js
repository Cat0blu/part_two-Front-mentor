let header = document.querySelector("header")
let img_Qr1 = document.querySelector("#img_QRcode1")
let img_Qr = document.querySelector("#img_QRcode")

img_Qr1.classList.add("hidden")

header.addEventListener("click", ()=>{
    img_Qr1.classList.toggle("hidden")
    img_Qr.classList.toggle("hidden")
})