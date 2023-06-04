function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let intervalId;
btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(intervalId);
  document.body.style.backgroundColor = '';
});
