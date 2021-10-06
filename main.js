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
  });
});

normal.addEventListener("click", () => {
  player.classList.remove("animation");
  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
  });
});

difficult.addEventListener("click", () => {
  player.classList.add("animation");
  player.addEventListener("mouseover", () => {
    let num1 = Math.round(Math.random() * 500);
    let num2 = Math.round(Math.random() * 500);
    player.style.marginTop = `${num1}px`;
    player.style.marginLeft = `${num2}px`;
  });
});

imposible.addEventListener("click", () => {
  player.classList.remove("animation");
  player.addEventListener("mouseover", () => {
    player.style.display = "none";
    alert("Jaja como te lo vas a pasar si dice imposible");
  });
});

player.addEventListener("mouseover", () => {
  sumarPuntos();
});
