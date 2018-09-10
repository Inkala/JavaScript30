const playSound = e => {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const drum = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
    drum.classList.add('playing');
  }
}

const removeClass = e => {
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.map(key => key.addEventListener('transitionend', removeClass));
window.addEventListener('keydown', playSound);
