let rlSync = require('readline-sync');

function avg(arr) {
  return arr.reduce( (a, b) => a + b) / arr.length;
}

let grades = [];
let oneGrade;
while(true) {
  oneGrade = rlSync.question('Enter grade: ');
  if (oneGrade === '') break;
  grades.push(Number(oneGrade));
}

let grade;
if(grades.length === 0) {
  grade = 'not entered'
} else {
  let averageGrade = avg(grades);
  if (averageGrade >= 90) {
    grade = 'A';
  } else if(averageGrade >= 70) { 
    grade = 'B';
  } else if(averageGrade >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }
}

console.log(`Grade is ${grade}.`);

// let grade;
// switch (Math.floor(averageGrade / 10)) {
//   case 10:
//   case 9:
//     grade = 'A';
//     break;
//   case 8:
//   case 7:
//     grade = 'B';
//     break;
//   case 6:
//   case 5:
//     grade = 'C';
//     break;
//   default:
//     grade = 'F';
// }

