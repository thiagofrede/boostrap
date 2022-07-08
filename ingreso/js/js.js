console.log("BOCAAAAAAAAAAAAAAAAAAA");
let edad = 17;


/*
VARIABLES(CAMBIA)
CONSTANTES(NO CAMBIAN A LO LARGO DEL PROGRAMA)

*/
//defino o declaro constante
const mensaje = document.getElementById("mensaje");
//selecciono el boton
const boton = document.getElementById("boton");
//selecciono el body

// escuchar  un evento en particular
boton.addEventListener("click",mostrarfondo);
//crear la funcion mostrarfondo
function mostrarfondo(){
    console.log("click");
    mensaje.classList.add("bg-success");
}

//seleccionamos mensaje y le agregamos o cambiamos el contenido
mensaje.textContent = "Desde javascript";
//eliminar clases
mensaje.classList.remove("text-center", "bg-primary");
// mensaje.classList.add("text-center", "bg-info");

//funcion
function mostrartexto(e){
   console.log(e);
}

//invocacion de la funcion

mostrartexto(edad);
