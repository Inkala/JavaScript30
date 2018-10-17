const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = bandName => bandName
  .replace(/^(a |an |the )/i, '').trim();

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');


// const sortedBands = bands.map(band => {
//   let bandArr = band.split(' ');
//   if (bandArr[0] === 'A' || bandArr[0] === 'An' || bandArr[0] === 'The') {
//     bandArr.push(bandArr.shift());
//   }
//   return bandArr.join(' ');
// }).sort();

// const fixBandsNames = sortedBands.map(band => {
//   let bandArr = band.split(' ');
//   const len = bandArr.length - 1;
//   if (bandArr[len] === 'A' || bandArr[len] === 'An' || bandArr[len] === 'The') {
//     bandArr.unshift(bandArr.pop());
//   }
//   return bandArr.join(' ');
// })

// document.querySelector('#bands').innerHTML = fixBandsNames.map(band => {
//   return `<li>${band}</li>`;
// }).join('');
