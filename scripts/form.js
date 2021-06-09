import render, {renderDates} from "./common.js";
import {diffDates} from "./date.js";

const form = document.getElementById("form-date");


form.addEventListener("submit", (evt) => {
  evt.preventDefault();


  const data1 = evt.target.elements.data1.value;
  const data2 = evt.target.elements.data2.value;


  if (!data1 || !data2) {
    render("Inserire enteambi date");
    return;
  }

  render("");
  const result = diffDates(data1, data2);
  renderDates(result);

});