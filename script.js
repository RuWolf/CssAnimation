const short = document.querySelector('#short');
const long = document.querySelector('#long');
const quantityChannel = document.querySelector('.quantity-channel');
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');
const hour = document.querySelector('#hour');
const result = document.querySelector('#result');
const valueChannel = document.querySelector('#value-channel');
const valueTime = document.querySelector('#value-time');

let channel = 1; //количество каналов
let time = 0; //
let factorTime = 1; // времянной коэф. Показывает количество сек. в зависимости от выбранной времяной шкалы

short.addEventListener('click', (event) => {
  short.classList.add('active');
  long.classList.remove('active');
  quantityChannel.classList.add('not-visible')
});

long.addEventListener('click', (event) => {
  long.classList.add('active');
  short.classList.remove('active');
  quantityChannel.classList.remove('not-visible');
});

sec.addEventListener('click', (event) => {
  sec.classList.add('active');
  min.classList.remove('active');
  hour.classList.remove('active');
  factorTime = 1;
});

min.addEventListener('click', (event) => {
  min.classList.add('active');
  sec.classList.remove('active');
  hour.classList.remove('active');
  factorTime = 60;
});

hour.addEventListener('click', (event) => {
  hour.classList.add('active');
  sec.classList.remove('active');
  min.classList.remove('active');
  factorTime = 3600;
});

valueChannel.addEventListener('click', event => {
  if (+event.target.value > 0) {
    channel = +event.target.value;
  } else {
    channel = 1;
  }
  result.innerHTML = calcPrise();
});

valueTime.addEventListener('click', event => {
  time = event.target.value;
  result.innerHTML = calcPrise();
});

calcPrise = () => {
  if (channel === 1) {
    let allTime = +time * factorTime;
    let prise = Math.ceil(allTime / 15) * 10 / 100;
    return `NLab Speech ${prise}₽`;
  } else {
    let doobleChannel = Math.ceil(channel / 2);
    let channelTime = Math.ceil(time*factorTime);
    if (channelTime < 15) {
      channelTime = 15;
    }
    return `NLab Speech ${doobleChannel*channelTime/100}₽`
  }
};


