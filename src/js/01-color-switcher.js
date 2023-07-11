function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const bodyEl = document.querySelector("body")
const btnStart= document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]")
btnStop.disabled = true;
let timerId = null;



btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor()
    bodyEl.style.backgroundColor = color;;
    btnStart.disabled = true;
    btnStop.disabled = false;
  
  }, 1000);});

btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});


