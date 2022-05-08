window.onload = inicio;

const cero = num =>{
    if(num.toString().length < 2)
    return `0`.concat(num);
    return num;
}


function inicio(){
    let reloj = document.getElementById(`reloj`)
    let day = document.getElementById(`day`)
    let dias =[`Domingo`,`Lunes`,`Martes`,`Miercoles`,`Jueves`,`Viernes`,`Sabado`]
    let meses =[
            `Enero`,`Febrero`,`Marzo`,`Abril`,
            `Mayo`, `Junio`, `Julio`, `Agosto`,
            `Septiembre`, `Octubre`,`Noviembre`,`Diciembre`
       ]

    let today = new Date()
    let hr = cero(today.getHours());
    let min = cero(today.getMinutes());
    let sec = cero(today.getSeconds());
    let dia = today.getDay();
    let mes = today.getMonth();
    let ano = (today.getYear()+1900);

    let m=meses[mes];
    let d=dias[dia];
    reloj.innerHTML = `${hr}:${min}:${sec}`
    day.innerHTML = `${d}, ${m} Del ${ano} `

}

inicio()
setInterval(inicio, 1000)


