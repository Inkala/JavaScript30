const boxes = Array.from(document.querySelectorAll('input'));
let lastChecked;

function handleChecks(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    boxes.map(box => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }
  lastChecked = this;
}

boxes.map(box => box.addEventListener('click', handleChecks));