const $botonEnviarDatos = document.querySelector('#boton-enviar-datos');
$botonEnviarDatos.onclick = function (){
    const $textoBienvenida = document.querySelector('#bienvenida')
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edad = document.querySelector('#edad-usuario').value;
    const textoDatosUsuario = document.querySelector('#consolidado-datos-usuario')
    textoDatosUsuario.innerText = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edad}`
    $textoBienvenida.innerText = `Bienvenido, ${primerNombreUsuario}!`

    return false
}
