const message = document.querySelector(".message");

//дифолтный экспорт(solo uno)
export default function renderMessage(text) {
    message.textContent = text;
}
//именнованный экспорт(tanti)
export function renderDates(result) {
    message.innerHTML = `
        <span>Anni: ${result.years}</span>
        <span>Mesi: ${result.months}</span>
        <span>Giorni: ${result.days}</span>
        `;
}