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
