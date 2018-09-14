const panels = Array.from(document.querySelectorAll('.panel'));

function toggleOpen() {
  console.log('Clicked!')
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.map(panel => panel.addEventListener('click', toggleOpen));
panels.map(panel => panel.addEventListener('transitionend', toggleActive));