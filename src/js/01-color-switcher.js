const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

let timerId = null;

function onBtnStartClick() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onBtnStopClick() {
  btnStop.disabled = true;
  btnStart.disabled = false;
  clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
