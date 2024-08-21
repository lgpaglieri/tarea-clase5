const botonCalcularDuracionCurso=document.querySelector('button');
botonCalcularDuracionCurso.onclick= function (){
    const nombresDeClases=document.querySelectorAll('.nombre-video');
    const arrayNombresDeClases=[];
    const horasVideo=document.querySelectorAll('.horas-video');
    const arrayHorasVideo=[];
    const minutosVideo=document.querySelectorAll('.minutos-video');
    const arrayMinutosVideo=[];
    const segundosVideo=document.querySelectorAll('.segundos-video');
    const arraySegundosVideo=[];
    let textoDuracionCurso=document.querySelector('#duracion-total-curso');
    let sumaHorasCurso=0;
    let sumaMinutosCurso=0;
    let sumaSegundosCurso=0;
    // En este for se pasan las NodeList a Arrays
    for (let i=0;i<nombresDeClases.length;i++){
        arrayNombresDeClases.push(nombresDeClases[i].innerText);
        arrayHorasVideo.push(horasVideo[i].value);
        arrayMinutosVideo.push(minutosVideo[i].value);
        arraySegundosVideo.push(segundosVideo[i].value);
    }
    // En este otro for se suman los valores de los arrays correspondientes a horas, minutos y segundos 
    for (let i=0;i<nombresDeClases.length;i++){
        sumaHorasCurso+=Number(arrayHorasVideo[i]);
        sumaMinutosCurso+=Number(arrayMinutosVideo[i]);
        sumaSegundosCurso+=Number(arraySegundosVideo[i]);
    }

    // Aca se calculan las horas, minutos y segundos totales del curso con el formato correspondiente (min max=59 y seg max =59)
    horasResultDeSumaMinutos=Math.trunc(sumaMinutosCurso/60);
    minutosRestantes=sumaMinutosCurso%60;
    minutosResultDeSumaSegundos=Math.trunc(sumaSegundosCurso/60);
    segundosRestantes=sumaSegundosCurso%60;
    horasTotalesCurso=sumaHorasCurso+horasResultDeSumaMinutos;
    minutosTotalesCurso=minutosRestantes+minutosResultDeSumaSegundos;
    segundosTotalesCurso=segundosRestantes;

    textoDuracionCurso.innerText=`La duración completa de todas las clases de r/ArgentinaPrograma es de ${horasTotalesCurso} horas, 
    ${minutosTotalesCurso} minutos y ${segundosTotalesCurso} segundos.`
    return false;
}
