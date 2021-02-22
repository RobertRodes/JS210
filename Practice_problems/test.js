function arrReverse(arr) {
  let clone = [...arr];
  let revArr = [];
  while (clone.length > 0) {
    revArr.push(clone.pop());
  }

  return revArr;
}


console.log(arrReverse([1, 2, 3, 4, 5]));