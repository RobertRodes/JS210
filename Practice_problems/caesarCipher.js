function _caesarEncrypt(string, offset) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let encryptedString = '';
  for (let i = 0; i < string.length; i++) {
    let charIndex = ALPHABET.indexOf(string[i].toUpperCase())
    if (charIndex === -1) {
      encryptedString += string[i];
      continue;
    }

    let nextChar = ALPHABET[(charIndex + offset) % ALPHABET.length];
    if (/[a-z]/.test(string[i])) nextChar = nextChar.toLowerCase();
  
    encryptedString += nextChar;
  }

  return encryptedString;
}

function caesarEncrypt(string, offset) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return [...string].map( char => {
    let charIndex = ALPHABET.indexOf(char.toUpperCase())
    if (charIndex === -1) return char;

    let nextChar = ALPHABET[(charIndex + offset) % ALPHABET.length];
    if (/[a-z]/.test(char)) nextChar = nextChar.toLowerCase();
  
    return nextChar;
  }).join('');
}

let x = Date.now();
for (let j = 0; j < 100000; j++) {
   caesarEncrypt('Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! ', 10);
}
console.log(Date.now() - x);

x = Date.now();
for (let j = 0; j < 100000; j++) {
   _caesarEncrypt('Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! ', 10);
}
console.log(Date.now() - x);

// console.log(caesarEncrypt('Robert Rodes', 27));

// console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"