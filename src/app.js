import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let pinta = ["♦", "♥", "♠", "♣"]

  function generarCarta() {
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
    let randomPinta = pinta[Math.floor(Math.random() * pinta.length)]

    document.getElementById("center").innerHTML = randomNumber
    document.getElementById("figura-arriba").innerHTML = randomPinta
    document.getElementById("figura-abajo").innerHTML = randomPinta


    if (randomPinta == "♦" || randomPinta == "♥") {
      document.getElementById("figura-arriba").style.color = "red"
      document.getElementById("figura-abajo").style.color = "red"
    } else {
      document.getElementById("figura-arriba").style.color = "black"
      document.getElementById("figura-abajo").style.color = "black"
    }

  }
  generarCarta()
  
  document.getElementById("cambiar-carta").addEventListener("click", generarCarta)





  //write your code here
  console.log("Hello Rigo from the console!");
};
