function rotateString(string, count, reverse = false) {
  let arrRotated = string.split('');
  for (let i = 0; i < count; i++) {
    if (reverse) {
      arrRotated.unshift(arrRotated.pop());
    } else {
      arrRotated.push(arrRotated.shift());
    }
  }
  return arrRotated.join('');
}

function rotAny(string, count = 13, reverse = false) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let rotatedAlphabet = rotateString(ALPHABET, count, reverse);
  let strLower = string.toLowerCase(); // Simplifies case check

  let strCipher = '';

  for (let idx = 0; idx < strLower.length; idx++) {
    let nextChar = rotatedAlphabet[ALPHABET.indexOf(strLower[idx])];

    if (nextChar === undefined) { // i.e not alpha character
      nextChar = string[idx];
    } else if (/[A-Z]/.test(string[idx])) { // i.e. plaintext is upper case
      nextChar = nextChar.toUpperCase();
    }

    strCipher += nextChar;
  }

  return strCipher;
}

let plainText = "J'ai déposé mes bagages à l'hôtel (je suis dans la chambre 407), et je suis maintenant à votre service. [I have dropped my luggage off at the hotel (I'm in room 407), and I am now at your service.]";

console.log(rotAny(plainText));
console.log(rotAny(rotAny(plainText)));
console.log(rotAny(plainText, 5, true));
