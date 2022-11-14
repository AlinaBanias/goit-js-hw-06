function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  widgetEl: document.querySelector(".widget"),
  changeColor: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
}

refs.changeColorBtn.addEventListener("click" , onBtnCnahgeColor);

function onBtnCnahgeColor(event) {
  refs.changeColor.textContent = getRandomHexColor();
  console.log(getRandomHexColor);
}