const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => {
    const [mins, secs] = node.dataset.time.split(':');
    return (mins * 60) + (secs * 1);
  })
  .reduce((total, secs) => total + secs);

  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;
  
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(`${hours}:${mins}:${secondsLeft}`)