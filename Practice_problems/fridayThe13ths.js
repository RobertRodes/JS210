function fridayThe13ths(year) {
  let date = new Date(year, 0, 13);
  let badLuckCount = 0;

  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) badLuckCount += 1;
  }

  return badLuckCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2