let svg_icon_share = document.querySelector(".cmp_svg")
let redes = document.querySelector(".redes")
let __svg_activate_redes = document.querySelector(".__svg_activate_redes")
let tri = document.querySelector("#try")


setInterval(()=>{
   if(window.getComputedStyle(redes).display === "none")
   {
     tri.style.display = "none"
   }
},1000)


svg_icon_share.addEventListener("click", ()=>{
    svg_icon_share.classList.toggle("cmp_svg_activate")
    
    if(window.getComputedStyle(redes).display != "flex")
    {
        redes.style.display = "flex"
        tri.style.display = "block"
    }
    else 
    {
        redes.style.display = "none"
        tri.style.display = "none"
    }
})

__svg_activate_redes.addEventListener("click", ()=>{
    document.querySelector(".redes_mobile").style.display = "none"
})