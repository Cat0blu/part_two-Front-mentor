
export function mobile()
{
    let icon_menu_mobile = document.querySelector("#icon_menu_mobile")
    let close_menu_mobile = document.querySelector("#close_menu")
    let menu_mobile_activated = document.querySelector("#menu_mobile_activated")
    let mobile_floating_window = document.querySelectorAll(".mobile_floating_window")
    let mobile_window_features = document.querySelector("#mobile_window_features")
    let mobile_window_company = document.querySelector("#mobile_window_company")
    let img_hero_mobile = document.querySelector("#img_hero_mobile")

    icon_menu_mobile.addEventListener("click", ()=>{
        menu_mobile_activated.style.display = "block" 
        document.querySelector("body").style.background = "hsla(0, 0%, 8%, 0.548)" 
        img_hero_mobile.style.opacity = ".6"
    })
    close_menu_mobile.addEventListener("click", ()=>{
        menu_mobile_activated.style.display = "none"
        document.querySelector("body").style.background = "hsl(0, 0%, 98%)" 
        img_hero_mobile.style.opacity = "1"
    })

   mobile_floating_window.forEach((cmp)=>{
        cmp.addEventListener("click",()=>{
            let img = cmp.querySelector("img")

            if(img.src.includes("images/icon-arrow-down.svg"))
            {
                img.src = "images/icon-arrow-up.svg"
                if(img.previousElementSibling.innerHTML === "Features")
                {
                    mobile_window_features.style.display = "block"
                }else 
                {
                    mobile_window_company.style.display = "block" 
                }
            }
            else 
            {
                img.src = "images/icon-arrow-down.svg"
                 if(img.previousElementSibling.innerHTML === "Features")
                {
                    mobile_window_features.style.display = "none"
                }else 
                {
                    mobile_window_company.style.display = "none" 
                }
            }
        })
   })
}