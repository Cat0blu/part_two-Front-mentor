
export function desktop()
{
    let cmp_floating_window = document.querySelectorAll(".cmp_floating_window")
    let window_features = document.querySelector("#window_features")
    let window_company = document.querySelector("#window_company")

    cmp_floating_window.forEach((cmp)=>{
        cmp.addEventListener("click", ()=>{
        let img = cmp.querySelector("img")
    
        if(img.src.includes("images/icon-arrow-up.svg"))
        {
            cmp.querySelector("img").src = "images/icon-arrow-down.svg"
            if(img.previousElementSibling.innerHTML === "Features")
            {
                window_features.style.visibility = "hidden"
            }
            else 
            {
                window_company.style.visibility = "hidden" 
            }
        }
        else 
        {
            cmp.querySelector("img").src = "images/icon-arrow-up.svg"
            console.log(img.previousElementSibling.innerHTML)
            if(img.previousElementSibling.innerHTML === "Features")
            {
                window_features.style.visibility = "visible"
            }
            else 
            {
                window_company.style.visibility = "visible" 
            }
        }
    })
    })
}