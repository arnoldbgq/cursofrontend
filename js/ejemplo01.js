alert("Practicando JS");

function ejemplo01() {
  //Entradas
  let precio1 = prompt("Ingrese Precio 1: "),
    precio2 = prompt("Ingrese Precio 2: "),
    precio3 = prompt("Ingrese Precio 3: ");
  let cantidad1 = prompt("Ingrese Cantidad 1: "),
    cantidad2 = prompt("Ingrese Cantidad 1: "),
    cantidad3 = prompt("Ingrese Cantidad 1: ");
  //Proceso
  let subTotal =
    precio1 * cantidad1 + precio2 * cantidad2 + precio3 * cantidad3;
  alert("su subtotal a pagar es de $" + subTotal);
  if (subTotal > 100) {
    total = subTotal * 0.95;
    alert("usted tiene un descuento por que compro mas de $100");
  } else {
    total = subTotal;
  } //Salida
  alert("El total a pagar sera de $" + total);
}
function Pnombre() {
  let nombre = prompt("Como te llamas?");
  alert("Hola, " + nombre);
}

function taxi() {
  //entradas
  let km = prompt("Ingrese los kilometros recorridos: ");
  //proceso
  let total = 10 + km * 3;
  //salida
  alert("El total de la carrera de " + km + "km a pagar seria de S/." + total);
}

function promedio() {
  alert("Vamos a calcular el promedio de un numero de notas.");
  //entradas
  let notas = prompt("Ingrese cuantas notas calculará: ");
  let total = 0;
  for (let i = 1; i <= notas; i++) {
    let nota = Number(prompt("Ingrese nota " + i + ": "));
    console.log(nota);
    //proceso
    total = total + nota;
    console.log(total);
  }
  let prome = total / notas;
  alert("El promedio de esas " + notas + " es :" + prome);
}
