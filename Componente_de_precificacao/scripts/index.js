"use strict"
const input_range = document.querySelector("#range_input")
const value_input = document.querySelector("#value_")
const btn_circular = document.querySelector("#cmp_btn_circular") 
const text_light_red = document.querySelector("#cmp_btn_circular + p + p")
const width_viewport = screen.width


value_input.innerHTML = "$" +(Number(input_range.value) * 0.32).toFixed(2)

input_range.addEventListener("input", ()=>{
    value_input.innerHTML = "$" + (Number(input_range.value) * 0.32).toFixed(2)
    console.log(Number(input_range.min))

    atulizarBackground(input_range.value)
})

function atulizarBackground(valuee){
    const porcentagem = (valuee - input_range.min) / ( input_range.max - input_range.min) * 100
    input_range.style.background =  `linear-gradient(to right, hsl(174, 77%, 80%) ${porcentagem}%, hsl(224, 65%, 95%) ${porcentagem}%)`
}



btn_circular.addEventListener("click", ()=>{
    btn_circular.classList.toggle("activate")
})

console.log(text_light_red.innerHTML.split(" ")[0])

setInterval(()=>{
    const body_  = document.body.clientWidth
    if(body_ <= 435)
    {
        text_light_red.innerHTML = text_light_red.innerHTML.split(" ")[0]
    }
    else 
    {
        text_light_red.innerHTML = "25% discount"
    }
    console.log(body_)
}, 1000)

