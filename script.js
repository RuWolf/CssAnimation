const short = document.querySelector('#calc-audio-short');
const long = document.querySelector('#calc-audio-long');
const quantityChannel = document.querySelector('.calc-quantity-channel');
const sec = document.querySelector('#calc-time-sec');
const min = document.querySelector('#calc-time-min');
const hour = document.querySelector('#calc-time-hour');
const result = document.querySelector('#calc-result');
const valueChannel = document.querySelector('#value-channel');
const valueTime = document.querySelector('#value-time');

let channel = 1; //количество каналов
let time = 0; //
let factorTime = 1; // времянной коэф. Показывает количество сек. в зависимости от выбранной времяной шкалы

short && short.addEventListener('click', (event) => {
  short.classList.add('calc-button-active');
  long.classList.remove('calc-button-active');
  quantityChannel.classList.add('calc-not-visible');
  channel = 1;  //сброс параметров при сворачивании окна
  valueChannel.value = 1;
  result.innerHTML = calcPrice();
});

long && long.addEventListener('click', (event) => {
  long.classList.add('calc-button-active');
  short.classList.remove('calc-button-active');
  quantityChannel.classList.remove('calc-not-visible');
});

sec && sec.addEventListener('click', (event) => {
  sec.classList.add('calc-button-active');
  min.classList.remove('calc-button-active');
  hour.classList.remove('calc-button-active');
  factorTime = 1;
  result.innerHTML = calcPrice();
});

min && min.addEventListener('click', (event) => {
  min.classList.add('calc-button-active');
  sec.classList.remove('calc-button-active');
  hour.classList.remove('calc-button-active');
  factorTime = 60;
  result.innerHTML = calcPrice();
});

hour && hour.addEventListener('click', (event) => {
  hour.classList.add('calc-button-active');
  sec.classList.remove('calc-button-active');
  min.classList.remove('calc-button-active');
  factorTime = 3600;
  result.innerHTML = calcPrice();
});

valueChannel && valueChannel.addEventListener('change', event => {
  if (+event.target.value > 0) {
    channel = +event.target.value;
  } else {
    channel = 1;
  }
  result.innerHTML = calcPrice();
});

valueTime && valueTime.addEventListener('change', event => {
  time = event.target.value;
  result.innerHTML = calcPrice();
});

calcPrice = () => {
  if (channel === 1) {
    let allTime = +time * factorTime;
    let price = Math.ceil(allTime / 15) * 10 / 100;
    return `NLab Speech: ${price.toFixed(2)}₽`;
  } else {
    let doubleChannel = Math.ceil(channel / 2);
    let channelTime = Math.ceil(time * factorTime);
    if (channelTime < 15) {
      channelTime = 15;
    }
    return `NLab Speech: ${(doubleChannel * channelTime / 100).toFixed(2)}₽`
  }
};


