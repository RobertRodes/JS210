function swapPairs(array) {
  for (let i = 1; i <= array.length; i++) {
    if (array[i] < array[i - 1]) {
      [array[i - 1], array[i]] = [array[i], array[i - 1]];
    }
  }

  return array;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function _bubbleSort(array) {
  let clone = [];

  while (true) {
    if (arraysEqual(clone, array)) {
      return array;
    } else {
      clone = [...array];
      swapPairs(array);
    }
  }

  return array;
}

function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 1; i <= array.length; i++) {
      if (array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }

  } while (swapped);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]