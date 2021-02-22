function featured(num) {
  const MAX_NUMBER = 9876543201
  let counter = firstOddMultiple(num);

  while (counter <= MAX_NUMBER) {
    if (counter % 2 === 1 && unique(counter)) return counter; 
    counter += 14;
  }

  return `Error: there is no featured number for ${num}`;
}

function firstOddMultiple(num) {
  let firstMultiple = num + (7 - num % 7);
  return firstMultiple % 2 === 0 ? firstMultiple + 7 : firstMultiple;
}

function unique(num) {
  let strNum = String(num);
  return strNum.length === new Set(strNum).size;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
