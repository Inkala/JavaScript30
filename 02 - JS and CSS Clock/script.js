const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = (seconds * 6 + 90);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = mins * 6 + 90 + (secondsDeg / 60);
  minHand.style.transform = `rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours * 30 + 90) + (minsDeg / 60);
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  console.log(hours, mins, seconds);
}

setInterval(setDate, 1000);

// 6deg