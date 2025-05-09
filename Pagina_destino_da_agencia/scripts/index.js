let haburger_main = document.getElementById("cmp_icon_hamburger")
let menu_mobile_activated = document.getElementById("menu_mobile_activated")
let main = document.querySelector("main")
let click_haburger_main = false

haburger_main.addEventListener("click", ()=>{
    
    if(click_haburger_main)
    {
        menu_mobile_activated.style.display = "none"
        click_haburger_main = false
    }
    else 
    {
        menu_mobile_activated.style.display = "flex"
        click_haburger_main = true
    }
    
})

