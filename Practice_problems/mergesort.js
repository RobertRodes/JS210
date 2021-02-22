function merge(arr1, arr2) {
  let mergedArray = [];

  // Compare values and push the lower one until you get through one of the arrays
  let counter1 = 0;
  let counter2 = 0;
  while (counter1 < arr1.length && counter2 < arr2.length) {
    if (arr1[counter1] < arr2[counter2]){
      mergedArray.push(arr1[counter1]);
      counter1++;
    } else {
      mergedArray.push(arr2[counter2]);
      counter2++;
    }
  }

  // Add on any remaining values from one of the arrays
  mergedArray = mergedArray.concat(arr1.slice(counter1));
  mergedArray = mergedArray.concat(arr2.slice(counter2));

  return mergedArray;
}

function mergeSort(arr) {
  if(arr.length === 1) return arr;
  let firstHalf = mergeSort(arr.splice(0, arr.length / 2));
  let secondHalf = mergeSort(arr);
  return merge(firstHalf, secondHalf);
}

let x = [6, 2, 7, 1, 4]
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort(x));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
