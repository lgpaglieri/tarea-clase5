const botonEnviarDatos = document.querySelector('#boton-enviar-datos');
botonEnviarDatos.onclick = function (){
    const datosUsuario = document.querySelectorAll('.datos-usuario');
    const textoBienvenida = document.querySelector('#bienvenida')
    const primerNombreUsuario = datosUsuario[0].value;
    const segundoNombreUsuario = datosUsuario[1].value;
    const apellidoUsuario = datosUsuario[2].value;
    const edad = datosUsuario[3].value;
    const textoDatosUsuario = document.querySelector('#consolidado-datos-usuario')
    textoDatosUsuario.innerText = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edad}`
    textoBienvenida.innerText = `Bienvenido, ${primerNombreUsuario}!`

    return false
}
