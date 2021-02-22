function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  chars = string.toLowerCase().match(/[a-z]/g);
  return chars === chars.reverse(); 
}

function isPalindromicNumber(num, octal = false) {
  let strNum;
  if (octal) {
    strNum = '0' + num.toString(8);
  } else {
    strNum = String(num);
  }

  return isPalindrome(strNum);
}

console.log(isPalindromicNumber(01210, true));
console.log(isPalindromicNumber(23455432));



// console.log(isPalindrome('madam'));
// console.log(isRealPalindrome('Madam'));
// console.log(isRealPalindrome("madam i'm adam"));
// console.log(isRealPalindrome('35a66zza54'));