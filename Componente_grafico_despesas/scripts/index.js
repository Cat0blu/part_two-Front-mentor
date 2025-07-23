document.addEventListener("DOMContentLoaded", function () {
    let dia_da_semana = new Date().getDay();
    let grafico = document.querySelectorAll("#grafico > div >div");

    let dias = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

    
    grafico.forEach((div)  => {
        div.addEventListener("click", ()=>{
            text_flot = div.querySelector(".text_flutuante")
            if(window.getComputedStyle(text_flot).opacity === "0")
            {
                text_flot.style.opacity = "1"
            }
            else 
            {
                text_flot.style.opacity = "0"
            }
        
        })
        if(div.nextElementSibling.innerHTML === dias[dia_da_semana])
        {
            div.style.backgroundColor = "hsl(186, 34%, 65%)"
        }
        
    });

    
});
