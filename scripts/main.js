console.log("Hola 👋🏼, esta es la primera pre-entrega");
let edad = parseInt(prompt("Para reservar en lugar debes ser mayor de edad ¿Cúal es su edad?"));
if (edad >= 18) {
    alert("Puede ingresar al sitio");
    console.log("--> Puede ingresar a reservar al sitio");
} else {
    alert("No puede reservar, no es mayor de edad.");
    console.log("--> No puede reservar, no es mayor de edad.");
}
let reserva = prompt("Ingrese el nombre de la persona que realiza la reserva");
alert("El nombre de la persona que realiza la reserva es: " + reserva);
let personas = parseInt(prompt("¿Para cuantas personas es la reserva?"));
alert("La cantidad de personas que asistiran a la reserva son: " + personas);
for (let numeroDePlato = 1; numeroDePlato <= personas; numeroDePlato++) {
  let carta = prompt(
    "¿Cual es el nombre del plato " + numeroDePlato + "?"
  );
  alert("El plato número " + numeroDePlato + " es: " + carta);
  let cuantosFaltan = personas - numeroDePlato;
  let message = "Aún te faltan agregar " + cuantosFaltan + " platos!";
  if (cuantosFaltan == 1) {
    message = "Aún te falta agregar 1 plato!";
  }
  if (cuantosFaltan == 0) {
    message = "No te faltan platos por añadir, buen trabajo. Disfrute su pedido!";
  }
  alert(message);
}