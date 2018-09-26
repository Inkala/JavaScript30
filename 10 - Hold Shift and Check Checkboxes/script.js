const boxes = Array.from(document.querySelectorAll('input'));
const holdSelect = boxes.map(box => {
  box.addEventListener('click', e => console.log('E:', e, '\nBox:', boxes.indexOf(box)));
});