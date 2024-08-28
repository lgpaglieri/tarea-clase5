const $botonCalcularDuracionCurso=document.querySelector('button');
let $textoDuracionCurso=document.querySelector('#duracion-total-curso');
let arrayHorasVideo, arrayMinutosVideo, arraySegundosVideo;
let horasTotalesCurso,minutosTotalesCurso,segundosTotalesCurso;

$botonCalcularDuracionCurso.onclick= function (event){
    const $horasVideo=document.querySelectorAll('#horas-video');
    const $minutosVideo=document.querySelectorAll('#minutos-video');
    const $segundosVideo=document.querySelectorAll('#segundos-video');
    arrayHorasVideo=convertirNodeListInputAArray($horasVideo);
    arrayMinutosVideo=convertirNodeListInputAArray($minutosVideo);
    arraySegundosVideo=convertirNodeListInputAArray($segundosVideo);
    obtenerTiemposTotales();
    mostrarTiemposTotales();
    event.preventDefault();
}

function obtenerTiemposTotales (){
    const sumaHorasCurso=sumaValoresArray(arrayHorasVideo);
    const sumaMinutosCurso=sumaValoresArray(arrayMinutosVideo);
    const sumaSegundosCurso=sumaValoresArray(arraySegundosVideo);
    horasResultDeSumaMinutos=Math.trunc(sumaMinutosCurso/60);
    minutosRestantes=sumaMinutosCurso%60;
    minutosResultDeSumaSegundos=Math.trunc(sumaSegundosCurso/60);
    segundosRestantes=sumaSegundosCurso%60;
    horasTotalesCurso=sumaHorasCurso+horasResultDeSumaMinutos;
    minutosTotalesCurso=minutosRestantes+minutosResultDeSumaSegundos;
    segundosTotalesCurso=segundosRestantes;
}

function mostrarTiemposTotales(){
    $textoDuracionCurso.innerText=`La duración completa de todas las clases de r/ArgentinaPrograma es de ${horasTotalesCurso} horas, 
    ${minutosTotalesCurso} minutos y ${segundosTotalesCurso} segundos.`
}

function sumaValoresArray (arrayASumar){
    let resultadoSumaArray=0;
    for (let i=0;i<arrayHorasVideo.length;i++){
        resultadoSumaArray+=Number(arrayASumar[i]);
    }
    return resultadoSumaArray;
}

function convertirNodeListLabelAArray ($nodeList,){
    const arrayResultante=[]
    for (let i=0;i<$nodeList.length;i++){
        arrayResultante.push($nodeList[i].innerText);
    }
    return arrayResultante;
}

function convertirNodeListInputAArray ($nodeList,){
    const arrayResultante=[]
    for (let i=0;i<$nodeList.length;i++){
        arrayResultante.push($nodeList[i].value);
    }
    return arrayResultante;
}
