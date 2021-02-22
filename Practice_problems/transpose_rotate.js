function rotate90_(matrix) {
  let transposedMatrix = [];
  for (let colIdx = 0; colIdx < matrix[0].length; colIdx += 1) {
    let newRow = [];
    for (let rowIdx = matrix.length - 1; rowIdx >= 0; rowIdx -= 1) {
      newRow.push(matrix[rowIdx][colIdx]);
    }

    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}

function rotate90(matrix) {
  let transposedMatrix = [];
  for (let colIdx = 0; colIdx < matrix[0].length; colIdx += 1) {
    let newRow = [];
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
      newRow.push(matrix[rowIdx][colIdx]);
    }

    transposedMatrix.push(newRow.reverse());
  }

  return transposedMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// function transpose(matrix) {
//   let transposedMatrix = [];
//   for (let colIdx = 0; colIdx < matrix[0].length; colIdx += 1) {
//     let newRow = [];
//     for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
//       newRow.push(matrix[rowIdx][colIdx]);
//     }

//     transposedMatrix.push(newRow);
//   }

//   return transposedMatrix;
// }

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]
// console.log(rotate([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]