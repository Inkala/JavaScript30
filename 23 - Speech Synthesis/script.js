const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.test = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
}

SpeechSynthesis.addEventListener('voicechanged', populateVoices)