
//import '../node_modules/howler/dist/howler.min.js';
import {sound} from "./sound.js";

//Timer
const form = document.getElementById("form-timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let pResult = document.querySelector(".result");

form.addEventListener("change", (el) => {
  el.preventDefault();

  const h = el.currentTarget.elements.hours.value;
  const m = el.currentTarget.elements.minutes.value;
  const s = el.currentTarget.elements.seconds.value;
  let result = (h, m, s);

  pResult.innerHTML = `${h}:${m}:${s}`;
  console.log(pResult.innerText);
  let resultH = h;
  let resultM = m;
  let resultS = s;
  //start Time
  let startTime;
  start.addEventListener("click", (event) => {
    event.preventDefault();

    let t = setInterval(function () {
      if ((resultS) > 0) {
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;
      } else if (resultM > 0) {
        resultM--;
        resultS = 60;
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;

      } else if (resultH > 0 & resultM == 0) {
        resultH--;
        resultM = 59;
        resultS = 60;
        resultS--;
        pResult.innerHTML = `${resultH}:${resultM}:${resultS}`;
      } else {
        pResult.innerHTML = `<span>Il tempo è finito</span>`;
        clearTimeout(t);

        // Setup the new Howl.
        /*var sound = new Howl({
          src: ['../suono.mp3'],
          autoplay: true,
          volume: 0.5,
          onend: function () {
            console.log('Finished!');
          }
        });*/
        sound.play();
      }
    }, 1000);

    stop.addEventListener("click", (event) => {
      event.preventDefault();
      clearTimeout(t);
    });
  });

});