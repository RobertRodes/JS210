let rlSync = require('readline-sync');

function avg(arr) {
  return arr.reduce( (a, b) => a + b) / arr.length;
}

let grades = [];
while(true) {
  let oneGrade = rlSync.question('Enter grade: ');
  if (oneGrade === '') break;
  grades.push(Number(oneGrade));
}

let grade;
if(grades.length === 0) {
  grade = 'not entered'
} else {
  averageGrade = avg(grades);
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