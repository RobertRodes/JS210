const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 1;

function average(array) {
  let sum = 0;
  const values = Object.values(array);

  values.forEach( (val) => {
    sum += val;
  });

  return sum / values.length;
}

function average2(array) {
  const values = Object.values(array);
  let sum = values.reduce( (acc, val) => acc + val, 0);  
  return sum / values.length;
}



console.log(average(myArray));
console.log(average2(myArray));
