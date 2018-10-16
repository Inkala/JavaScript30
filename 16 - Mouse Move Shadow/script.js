const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  const blur = Math.round(Math.abs(xWalk) + Math.abs(yWalk)) / 5;

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px ${blur}px rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px ${blur}px rgba(0, 255, 255, 0.7),
  ${xWalk}px ${yWalk * -1}px ${blur}px rgba(0, 255, 0, 0.7),
  ${xWalk * -1}px ${yWalk * -1}px ${blur}px rgba(0, 0, 255, 0.7)
    `;
  }
  
hero.addEventListener('mousemove', shadow);
