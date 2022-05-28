let player = document.querySelector("#player");
let puntation = document.getElementById("header");
let buttons = document.getElementsByClassName("button");
let easy = document.getElementById("easy");
let normal = document.getElementById("normal");
let difficult = document.getElementById("difficult");
let imposible = document.getElementById("imposible");

let puntos = 0;

function sumarPuntos() {
  puntos++;
  puntation.innerHTML = `Puntos: ${puntos}`;
}

easy.addEventListener("click", () => {

  player.classList.remove("animation");

  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 250);
    let num2 = Math.round(Math.random() * 250);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
  });

  player.removeEventListener("mouseover");

});

normal.addEventListener("click", () => {

  player.classList.remove("animation");

  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
  });

  player.removeEventListener("mouseover");
});

difficult.addEventListener("click", () => {

  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
  });

  player.classList.add("animation");
  player.removeEventListener("mouseover");
});

imposible.addEventListener("click", () => {

  player.classList.remove("animation");

  player.addEventListener("mouseover", () => {
    player.style.display = "none";
    alert('Es imposible')
  });

  player.removeEventListener("mouseover");
});


player.addEventListener("mouseover", () => {
  sumarPuntos();
});

console.log(puntos);