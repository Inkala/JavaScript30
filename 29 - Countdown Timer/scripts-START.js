const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const togglePlay = document.querySelector('.pause');
const stop = document.querySelector('.stop');

let countdown;
let secondsLeft;
let running = false;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft === 0) {
      document.querySelector('.ping').play();
    }
    if (secondsLeft < 0) {
      clearInterval(countdown);
      running = false;
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
  toggleButton();
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? '0' : ''
  }${reminderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? '0' : ''
  }${minutes}${hour > 12 ? ' PM' : ' AM'}`;
}

function startTimer() {
  running = true;
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
  toggleButton();
}

function stopTimer() {
  // debugger;
  running = true;
  toggleButton();
  if (!secondsLeft || secondsLeft <= 0) return;
  clearInterval(countdown);
  timer(0);
  secondsLeft = 0;
  running = false;
}

function toggleTimer() {
  if (!secondsLeft || secondsLeft <= 0) return;
  if (running) {
    clearInterval(countdown);
    running = false;
  } else {
    timer(secondsLeft - 1);
    running = true;
  }
  toggleButton();
}

function toggleButton() {
  if (running) {
    togglePlay.classList.remove('play');
    togglePlay.textContent = '||';
  } else {
    togglePlay.classList.add('play');
    togglePlay.textContent = '►';
  }
}

buttons.forEach(button => button.addEventListener('click', startTimer));
stop.addEventListener('click', stopTimer);
togglePlay.addEventListener('click', toggleTimer);

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
