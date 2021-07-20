import Countdown from "./countdown.js";

const fimDeano = new Countdown("31 December 2021 00:00:00 GMT-0300");
console.log(fimDeano.total);
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = fimDeano.total[index];
  });
}

mostrarTempo();
setInterval(mostrarTempo, 1000);
