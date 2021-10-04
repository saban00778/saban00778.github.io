let player = document.querySelector("#player");
let puntation = document.getElementById("header");
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
  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 150);
    let num2 = Math.round(Math.random() * 150);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
    sumarPuntos();
  });
});

normal.addEventListener("click", () => {
  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
    sumarPuntos();
  });
});

difficult.addEventListener("click", () => {
  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
    sumarPuntos();
  });
  player.classList.add("animation");
});

imposible.addEventListener("click", () => {
  player.classList.remove("animation");
  player.addEventListener("mouseover", () => {
    player.style.display = "none";
    alert("Jaja como te lo vas a pasar si dice imposible");
  });
});
