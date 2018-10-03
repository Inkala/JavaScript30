const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('SecretCode Entered');
    cornify_add();
  }
  console.log('Pressed:', pressed);
});