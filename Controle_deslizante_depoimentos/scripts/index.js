let text_main = document.querySelector(".text_main")
let btn_prev = document.querySelector("#btn_prev")
let btn_next = document.querySelector("#btn_next")
let img_tanya = document.querySelector("#img_tanya")
let img_john = document.querySelector("#img_john")

text_tanya = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” "

text_john = " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"


text_main.innerHTML = text_tanya

btn_next.addEventListener("click", ()=>{
    text_main.innerHTML = text_john
    img_tanya.classList.add("hidden")
    img_john.classList.remove("hidden")

})

btn_prev.addEventListener("click", ()=>{
    text_main.innerHTML = text_tanya
    img_tanya.classList.remove("hidden")
    img_john.classList.add("hidden")
})