function toLowerCase(string) {
  const CHAR_OFFSET = 32; 
  let uString = '';
  let a = 'a'.charCodeAt(0);
  let z = 'z'.charCodeAt(0);

  for(let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (string[i] >= 'A' && string[i] <= 'Z') {
      uString += String.fromCharCode(code + CHAR_OFFSET);
    } else {
      uString += string[i];
    }
  }

  return uString;
}

console.log(toLowerCase('ThiS Is a STriNG'));