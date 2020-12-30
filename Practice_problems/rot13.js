const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function isEncryptable(char) {
  return ALPHABET.indexOf(char.toLowerCase()) !== -1;
}

function encryptCase(char, encryptedChar) {
  return /[A-Z]/.test(char) ? encryptedChar.toUpperCase() : encryptedChar;
}

function rotateIndex(idx) {
  const CIPHER_OFFSET = 13;
  return (idx + CIPHER_OFFSET) % ALPHABET.length; 
}

function encrypt(char) {
  if (!isEncryptable(char)) return char;

  let charIndex = ALPHABET.indexOf(char.toLowerCase());  
  let encryptedChar = ALPHABET[rotateIndex(charIndex)];

  encryptedChar = encryptCase(char, encryptedChar);

  return encryptedChar;
}

function rot13(string) {
  let strCipher = '';

  for (let idx = 0; idx < string.length; idx++) {
    strCipher += encrypt(string[idx]);
  }

  return strCipher;
}

let plainText = "J'ai déposé mes bagages à l'hôtel (je suis dans la chambre 407), et je suis maintenant à votre service. [I have dropped my luggage off at the hotel (I'm in room 407), and I am now at your service.]";

console.log(rot13(plainText));
console.log(rot13(rot13(plainText)));