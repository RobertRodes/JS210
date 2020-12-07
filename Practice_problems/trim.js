function trim(str) {
  let counter = 0;
  while (str[counter] === ' ' && counter < str.length) {
    counter++;
  }
  
  let firstIndex = counter;

  counter = str.length - 1;
  while (str[counter] === ' ' && counter > 0) {
    counter--;
  }

  let lastIndex = counter;

  let trimmedString = ''; 
  for (i = firstIndex; i <= lastIndex; i++ ) {
    trimmedString += str[i];
  }

  return trimmedString;
}

console.log(trim('     This is a string.         '));