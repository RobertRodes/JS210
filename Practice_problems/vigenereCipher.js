function vigenereCipher(string, key) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  key = key.toUpperCase();

  let caesarEncryptChar = function(char, offset) {
    let charIndex = ALPHABET.indexOf(char.toUpperCase())
    if (charIndex === -1) return char;
    let cipherChar = ALPHABET[(charIndex + offset) % ALPHABET.length];

    return /[a-z]/.test(char) ? cipherChar.toLowerCase() : cipherChar;
  }

  let encryptedString = '';
  let keyPointer = 0;
  for (let i = 0; i < string.length; i++) {
    let offset = ALPHABET.indexOf(key[keyPointer]);
    let encryptedChar = caesarEncryptChar(string[i], offset);
    if (/[a-z]/i.test(encryptedChar)) {
      keyPointer += 1;
      keyPointer %= key.length;
    }

    encryptedString += encryptedChar;
  } 

  return encryptedString; 
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));