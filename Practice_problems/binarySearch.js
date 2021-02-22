function binarySearch(arr, value) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  while (highIndex - lowIndex > 1) {
    let srchIndex = Math.ceil((highIndex - lowIndex) / 2 + lowIndex);
    if (arr[srchIndex] > value) {
      highIndex = srchIndex;
    } else if (arr[srchIndex] < value) {
      lowIndex = srchIndex;
    } else {
      return srchIndex;
    }
  }

  switch(value) {
    case arr[lowIndex] : return lowIndex;
    case arr[highIndex] : return highIndex;
    default: return -1;
  }
}

function binar_ySearch(arr, value) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  while (highIndex >= lowIndex) {
    let srchIndex = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    if (arr[srchIndex] > value) {
      highIndex = srchIndex - 1;
    } else if (arr[srchIndex] < value) {
      lowIndex = srchIndex + 1;
    } else {
      return srchIndex;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -
debugger;
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
