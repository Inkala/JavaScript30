/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen__button');
let mousedown = false;

/* Build out functions */
const togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updateButton();
}

const updateButton = () => {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}


const handleProgress = () => {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

const handleRangeUpdate = (range) => {
  console.log(range);

  video[range.name] = range.value
}

const skip = (button) => {
  video.currentTime += Number(button.dataset.skip);
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function openFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
  }
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', () => skip(button)));
ranges.forEach(range => range.addEventListener('change', () => handleRangeUpdate(range)));
ranges.forEach(range => range.addEventListener('mousemove', () => handleRangeUpdate(range)));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  if (mousedown) {
    scrub(e);
  }
});
progress.addEventListener('mousedown', () => mousedown = true);
window.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', openFullScreen);
