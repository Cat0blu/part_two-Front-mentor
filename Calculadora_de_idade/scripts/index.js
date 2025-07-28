"use strict"

const btn_gerar_idade = document.getElementById("gerar_idade")
const year_value = document.getElementById("years_value")
const month_value = document.getElementById("months_value")
const day_value = document.getElementById("days_value")
let day_cmp = document.getElementById("day")
let month_cmp = document.getElementById("month")
let year_cmp = document.getElementById("year")

btn_gerar_idade.addEventListener("click", ()=>{
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const hoje = new Date();

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        day_cmp.classList.add("error")
        month_cmp.classList.add("error")
        year_cmp.classList.add("error")
        day_cmp.nextElementSibling.style.display = "block" 
        month_cmp.nextElementSibling.style.display = "block" 
        year_cmp.nextElementSibling.style.display = "block" 
        day_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        month_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        year_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        console.log("Preencha todos os campos com números válidos.")
        return;
    }

    // Criar a data e validar
    const dataNascimento = new Date(year, month - 1, day);

    if (
    dataNascimento.getFullYear() !== year ||
    dataNascimento.getMonth() !== (month - 1) ||
    dataNascimento.getDate() !== day
    ) {
        console.log("Data inválida. Verifique o dia, mês e ano.");
        day_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        month_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        year_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        day_cmp.nextElementSibling.nextElementSibling.style.display = "block"  
        day_cmp.classList.add("error")
        month_cmp.classList.add("error")
        year_cmp.classList.add("error")
        return;
    }

    else 
    {
        day_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 1%, 44%)"
        month_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 1%, 44%)"
        year_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 1%, 44%)"
        day_cmp.nextElementSibling.nextElementSibling.style.display = "none"  
        day_cmp.classList.remove("error")
        month_cmp.classList.remove("error")
        year_cmp.classList.remove("error")
        day_cmp.nextElementSibling.style.display = "none" 
        month_cmp.nextElementSibling.style.display = "none" 
        year_cmp.nextElementSibling.style.display = "none" 
    }

    if(year > hoje.getFullYear() || year < 1000)
    {
        year_cmp.classList.add('error')
        year_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        year_cmp.nextElementSibling.nextElementSibling.style.display = "block"
        return
    }

    else 
    {
        year_cmp.classList.remove('error')
        year_cmp.previousElementSibling.previousElementSibling.style.color = "hsl(0, 1%, 44%)"
        year_cmp.nextElementSibling.nextElementSibling.style.display = "none"
    }

    let anos = hoje.getFullYear() - year;
    let meses = hoje.getMonth() - (month - 1);
    let dias = hoje.getDate() - day;

    if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
    anos--;
    meses += 12;
    }

    console.log(`Idade: ${anos} anos, ${meses} meses e ${dias} dias.`);
    year_value.innerHTML = anos
    month_value.innerHTML = meses
    day_value.innerHTML = dias
})