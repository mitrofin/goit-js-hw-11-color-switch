import './styles.css';
import colors from "./templates/colors.json";


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const onStart = document.querySelector('button[data-action="start"]');
const onStop = document.querySelector('button[data-action="stop"]');

let timerId = null;