//visibilty


const dataCalc = document.querySelector(".dataCalc");
const timers = document.querySelector(".timers");

const currentDate = document.querySelector(".currentDate");
const timer = document.querySelector(".timer");

dataCalc.addEventListener("click", (event) => {
    event.preventDefault();

    if (currentDate.style.visibility == "visible") {
        currentDate.style.visibility = "hidden";
    } else {
        currentDate.style.visibility = "visible";
    }
});

timers.addEventListener("click", (event) => {
    event.preventDefault();

    if (timer.style.visibility == "visible") {
        timer.style.visibility = "hidden";
    } else {
        timer.style.visibility = "visible";
    }
});

