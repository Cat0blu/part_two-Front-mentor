let text_main = document.querySelector(".text_main")
let btn_prev = document.querySelector("#btn_prev")
let btn_next = document.querySelector("#btn_next")
let img_tanya = document.querySelector("#img_tanya")
let img_john = document.querySelector("#img_john")
let h3_text_user = document.querySelector(".text_user h3")
let p_text_user = document.querySelector(".text_user p")

text_tanya = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” "

text_john = " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"


text_main.innerHTML = text_tanya

btn_next.addEventListener("click", ()=>{
    text_main.innerHTML = text_john
    img_tanya.classList.add("hidden")
    img_john.classList.remove("hidden")
    h3_text_user.innerHTML = "John Tarkpor"
    p_text_user.innerHTML = "Junior Front-end Developer"
    

})

btn_prev.addEventListener("click", ()=>{
    text_main.innerHTML = text_tanya
    img_tanya.classList.remove("hidden")
    img_john.classList.add("hidden")
    h3_text_user.innerHTML = "Tanya Sinclair"
    p_text_user.innerHTML = "UX Engineer"
})