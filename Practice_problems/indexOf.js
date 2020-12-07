function indexOf(str, sub) {
  for (let i = 0; i <= str.length - sub.length; i++) {
    let substrCandidate = '';

    for (let j = i; j < i + sub.length; j++) {
      substrCandidate += str[j];
    }

    if (substrCandidate === sub) return i;
  }

  return -1;
}

function lastIndexOf(str, sub) {
  for (let i = str.length - sub.length; i >= 0; i--) {
    let substrCandidate = '';

    for (let j = i; j < i + sub.length; j++) {
      substrCandidate += str[j];
    }

    if (substrCandidate === sub) return i;
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

// function indexOf2(firstString, secondString) {
//   let limit = firstString.length - secondString.length;

//   for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
//     let matchCount = 0;

//     for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
//       if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
//         matchCount += 1;
//       } else {
//         break;
//       }
//     }

//     if (matchCount === secondString.length) {
//       return indexFirst;
//     }
//   }

//   return -1;
// }

// let x = Date.now();
// for (let i = 0; i < 100000; i++) {
//   indexOf('supercalifragilisticexpialidocious', 'x');
// }
// console.log(Date.now() - x);

// x = Date.now();
// for (let i = 0; i < 100000; i++) {
//   indexOf2('supercalifragilisticexpialidocious', 'x');
// }
// console.log(Date.now() - x);