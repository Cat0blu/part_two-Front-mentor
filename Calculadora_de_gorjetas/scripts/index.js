let bill = document.querySelector("#cmp_BillValue > input")
let gorjetas = document.querySelectorAll("#cmp_gorjetas > .porcentagens")
let gorjeta_selected 
let custom = document.getElementById("custom")
let number_people = document.getElementById("number_people")
let total_per_person = document.getElementById("total_per_person")
let tip_per_person = document.getElementById("tip_per_person")
let tip
let total
let btn_reset = document.getElementById("btn_reset")

setInterval(() => {
    if(bill.value.length > 10)
    {
        bill.value = ""
        window.alert("Numero muito grande(max_digitos 10)")
    }

 
}, 1000);

setInterval(()=>{
    if(custom.value.length > 10)
    {
        custom.value = ""
        window.alert("Numero muito grande(max_digitos 10)")
    }

}, 1000)

setInterval(()=>{
    if(number_people.value.length > 10)
    {
        number_people.value = ""
        window.alert("Numero muito grande(max_digitos 10)")
    }

}, 1000)

btn_reset.addEventListener("click", ()=>{
    if(window.getComputedStyle(btn_reset).opacity === "1")
    {
        window.location.reload()
    }
})

custom.addEventListener("click", ()=>{
    gorjetas.forEach((button)=>{
            button.classList.remove("button_activate")
        })

     if(bill.value === "")
        {
            bill.classList.add("error")
        }
    else 
    {
        bill.classList.remove("error")
    }

    if(number_people.value === "")
    {
        number_people.classList.add("error")
    }
    else
    {
        number_people.classList.remove("error")
    }    
    if(custom.value.length > 0 )
    {
        gorjeta_selected = Number(custom.value)

        tip = (gorjeta_selected) / Number(number_people.value)
        total = (Number(bill.value) + tip * Number(number_people.value)) / Number(number_people.value)

        if(tip)
        {
            tip_per_person.innerHTML = "$" + tip.toFixed(2)
        }

        if(total)
        {
            total_per_person.innerHTML = "$" + total.toFixed(2)
        }

        if(tip && total)
        {
            btn_reset.style.opacity = "1" 
        }
    }
})

gorjetas.forEach((gorjeta)=>{

    gorjeta.addEventListener("click", ()=>{
        custom.value = ""

        if(bill.value === "")
        {
            bill.classList.add("error")
        }
        else 
        {
            bill.classList.remove("error")
        }

        if(number_people.value === "")
        {
            number_people.classList.add("error")
        }
        else
        {
            number_people.classList.remove("error")
        }


        gorjetas.forEach((button)=>{
            button.classList.remove("button_activate")
        })

        gorjeta.classList.add("button_activate")
        gorjeta_selected = gorjeta.innerHTML.replace("%", " ")
        gorjeta_selected = Number(gorjeta_selected /100)

        tip = (Number(bill.value) * gorjeta_selected) / Number(number_people.value)
        total = (Number(bill.value) + tip * Number(number_people.value)) / Number(number_people.value)

        if(tip)
        {
            tip_per_person.innerHTML = "$" + tip.toFixed(2)
        }

        if(total)
        {
            total_per_person.innerHTML = "$" + total.toFixed(2)
        }

        if(tip && total)
        {
            btn_reset.style.opacity = "1" 
        }
    })
})