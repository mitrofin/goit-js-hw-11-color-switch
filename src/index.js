import './styles.css';
import colors from "./templates/colors.json";


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const onStart = document.querySelector('button[data-action="start"]');
const onStop = document.querySelector('button[data-action="stop"]');

let timerId = null;

onStart.addEventListener("click", onStartClick);
onStop.addEventListener('click', onStopClick);
console.log(onStart);

function onStartClick() {
  if (onStart.disabled) {
    return
  }
    onStart.disabled = true;
    timerId = setInterval(() => {
        document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
}

function onStopClick() {
    onStart.disabled = false;
    clearInterval(timerId);
}