alert("Bienvenido al juego de la batalla naval");
var tablero = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var tablero1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var jugador1 = prompt("Ingresa el nombre del jugador 1");
var jugador2 = prompt("Ingresa el nombre del jugador 2");
alert("Bienvenido " + jugador1 + " y " + jugador2);
Tablerojugador1();
Tablerojugador2();
hundir();
mostrarbarcoshundidos();

function Tablerojugador1() {
  for (i = 0; i<3; i++) {
    let barco = parseInt(
      prompt("Jugador " + jugador1 + " Ingresa la pocision del barco del 1-14")
    );
    tablero[barco] = "#";
  }
  return tablero;
}

function Tablerojugador2() {
  for (i = 0; i <3; i++) {
    let barco = parseInt(prompt("Jugador " + jugador2 + " Ingresa la pocision del barco del 1-14"));
    tablero1[barco] = "*";
  }
  return tablero1;
}

function hundir() {
  let bandera1 = 0;
  let bandera2 = 0;
  let bandera = false;
  while (bandera == false) {
    for (var i = 0; i<3; i++) {
      var x = parseInt(prompt( jugador1+" Ingresa la posicion en la que quieres hundir el barco del del 1-14"));
      if (tablero[x] == "*") {
        alert("Hundiste un barco, felicidades");
        bandera1 += 1;
      } else {
        alert("No hundiste un barco, sorry");
      }
    }
    for (var i = 0; i<3; i++) {
      var x = parseInt(
        prompt(jugador1+" Ingresa la posicion en la que quieres hundir el barco del 1-14"));
      if (tablero1[x] == "#") {
        alert("Hundiste un barco, felicidades");
        bandera2 += 1;
      } else {
        alert("No hundiste un barco, sorry");
      }
    }
    bandera = true;
  }
  if (bandera1 < bandera2) {
    console.log("Gano el jugador 1 " + jugador1);
  } else {
    console.log("Gano el jugador 2 " + jugador2);
  }
}
function mostrarbarcoshundidos(){
 console.log("Barcos hundidos del jugador " +jugador1);
 console.log(tablero);
 console.log("Barcos hundidos del jugador " +jugador2);
 console.log(tablero1);
}
