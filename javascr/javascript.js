const beto = document.getElementById("beto")
console.log(beto)


const boton1= document.getElementById('boton1');
const boton2=document.getElementById('boton2');
const boton3=document.getElementById('boton3');








boton1.addEventListener("click", mostrarFondo1);

function mostrarFondo1(){
    console.log("click"); 
    beto.classList.add("bg-dark",'text-light');
    beto.classList.remove('bg-secondary','bg-warning','text-danger','text-warning')


}
boton2.addEventListener("click", mostrarFondo2);

function mostrarFondo2(){
    console.log("click"); 
    beto.classList.add("bg-secondary","text-warning");
    beto.classList.remove('bg-dark','bg-warning','text-light','text-danger')


}
boton3.addEventListener("click", mostrarFondo3);

function mostrarFondo3(){
    console.log("click"); 
    beto.classList.add("bg-warning",'text-danger');
    beto.classList.remove('bg-secondary','bg-dark','text-light','text-warning')


}



