function lightsOn(switches) {
  return Array.from({length: ~~(switches**.5)}, (_, i) => (i + 1)**2);
}

function lightsOn(switches) {
  let top = Math.floor(Math.sqrt(switches));
  return Array.from({length: top}, (_, index) => (index + 1)**2);
}

console.log(lightsOn(5));
console.log(lightsOn(1000));
