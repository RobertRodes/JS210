function multisum(uLimit) {
  range = Array.from({length: uLimit}, (_, i) => ++i);
  return range.filter(num => num % 3 === 0 || num % 5 === 0)
              .reduce((total, num) => total + num);
}



console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
console.log(multisum(1000000000));
