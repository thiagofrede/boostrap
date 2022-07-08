/*const num1=document.getElementById("num1");
const num2=document.getElementById("num2");*/
const suma=document.getElementById("suma");
const elemento=document.getElementById("elemento");
console.log("desde el")


suma.addEventListener('click',sumar)
function sumar(){
    console.log("desde la suma")
    let num1=document.getElementById('num1').value;
    
    let num2=document.getElementById('num2').value;
    console.log(num1,num2);
    let suma=(parseInt(num1)+parseInt(num2))

    elemento.textContent= suma
}
