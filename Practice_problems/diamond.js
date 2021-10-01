/*
Problem
1. Given `n`, create a diamond made of asterisks, with width and height `n`. 
2. Assumption: `n` is an odd number.
3. The horizontal midpoint of the diamond is a row of `n` asterisks.
4. The diamond has `n` rows of asterisks.
5. The first row has one asterisk at the vertical midpoint of `n`, the next has three asterisks,
   where the second asterisk is at the vertical midpoint of `n`, the next has five, and so on.
6. Analogously, the last row has one asterisk at the vertical midpoint of `n`, the next-to-last
   row has three asterisks, where the second asterisk is at the vertical midpoint of `n`, and so on.

Algorithm
1. Determine the vertical midpoint.
2. Create a for loop that starts with 1 and loops by 2 while less than `n`.
3. Each iteration of the loop logs a row. For each iteration, add spaces in the amount of floor value
   of (n minus current index) over 2. Add stars in the amount of current index. Log the result.
4. Create a second for loop that starts with n and loops by -2 while greater than or equal to 1.
5. Repeat step 3 for the second loop.
*/

function diamond(size, hollow = false) {
  let i;

  function getPadding() {
    return ' '.repeat(Math.floor((size - i) / 2))
  }

  function getRow() {
    let padding = getPadding();
    let stars = '*'.repeat(i);
    if (hollow) stars = stars.replace(/(?!^.|.$)./g, ' ');
    return padding + stars;
  }

  for (i = 1; i <= size; i += 2) {
    console.log(getRow());
  }

  for (i = size - 2; i >= 1; i -= 2) {
    console.log(getRow());    
  }
}

diamond(9);