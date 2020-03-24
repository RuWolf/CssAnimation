const short = document.querySelector('#short');
const long = document.querySelector('#long');
const quantityChannel = document.querySelector('.quantity-channel');
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');
const hour = document.querySelector('#hour');
const result = document.querySelector('#result');
const valueChannel = document.querySelector('#value-channel');

let cancel = 1; //количество каналов
let time = 0; //

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
});

min.addEventListener('click', (event) => {
  min.classList.add('active');
  sec.classList.remove('active');
  hour.classList.remove('active');
});

hour.addEventListener('click', (event) => {
  hour.classList.add('active');
  sec.classList.remove('active');
  min.classList.remove('active');
});

valueChannel.addEventListener('click', event => {
  console.log(event.target.value)
  cancel = event.target.value
  result.innerHTML = `NLab Speech ${time} + ${cancel} = ${time + cancel}`;
});
result.innerHTML = `NLab Speech ${time} + ${cancel} = ${time + cancel}`;

