function lightsOn(switches) {
  return Array.from({length: ~~(switches**.5)}, (_, i) => (i + 1)**2);
}

function lightsOn(switches) {
  let top = Math.floor(Math.sqrt(switches));
  return Array.from({length: top}, (_, index) => (index + 1)**2);
}

function lightsOn(switches) {
  let lights = new Array(switches).fill(false);

  let counter = 1;

  while (counter <= switches) {
    lights.forEach((light, index) => {
      if ((index + 1) % counter === 0) lights[index] = !lights[index];
    });

    counter += 1;
  }

  return lights.reduce((answer, light, index) => {
    if (light === true) answer.push(index + 1);
    return answer;
  }, []);

  // return lights.map((light, index) => light ? index + 1 : false)
  //              .filter((light) => light);
}

console.log(lightsOn(10));
// console.log(lightsOn(1000));
