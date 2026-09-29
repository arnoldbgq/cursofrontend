function saludar(){
        console.log("hola mundo");
        let a = 10;
        let b = 5;
        let suma = a+b;
        console.log(suma);
        alert("Bienvenidos")
        alert("ola k ace");
}
function multiplicar(){
    let numero1 = 3;
    let numero2= 4;
    let m = numero1*numero2
    alert("producto = "+ m)
}

function cuenta(){
    let total=100;
    let amigos=4;
    let cuota = total/amigos;
    alert("la cuenta es de S/."+total+" entre "+amigos+" amigos se dividira en S/."+cuota+" por persona." )
}
function mayor(){
    let edad=20;
    if (edad>=18){
        alert("Es mayor de Edad")
    } 
}
function buclecito(){
    let i = 0;
    while (i<=14){
        console.log("Iteración: "+ i)
        i++; 
    } 

    for(let j=0;j<=4;j++){
        alert("Alerta de Bucle For: "+j)
    }
}

function cambiarTitulo(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = 
}
