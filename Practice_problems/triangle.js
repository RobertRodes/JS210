function triangle(...sides) {
  let sumOfSides = sides.reduce((acc, num) => acc + num);
  if (Math.max(...sides) >= sumOfSides / 2 || sides.includes(0)) {
    return 'invalid';
  }

  let uniqSides = [...new Set(sides)].length;
  switch (uniqSides) {
    case 1: return 'equilateral';
    case 2: return 'isosceles';
    default: return 'scalene';
  }
}

function triangle(...angles) {
  let sumOfAngles = angles.reduce((acc, num) => acc + num);

  if (sumOfAngles !== 180 || angles.includes(0)) return 'invalid';  
  if (angles.some((angle) => angle > 90)) return 'obtuse';
  if (angles.includes(90)) return 'right';
  return 'acute';
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
