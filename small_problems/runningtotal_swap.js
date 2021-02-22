function runningTotal(array) {
  let arrayCopy = [...array];
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.unshift(arrayCopy.reduce( (acc, elt) => acc + elt ));
    arrayCopy.pop(); 
  }

  return result;
}

function runningTotal(array) {
  let acc = 0;
  return array.map((elt) => acc += elt);
}

function swap(string) {
  return string.split(' ').map( (word) => {
    let lastIdx = word.length - 1;
    word = word.split('');
    [word[0], word[lastIdx]] = [word[lastIdx], word[0]]; 
    return word.join('');
  }).join(' ');
}

function swap2(string) {
  return string.split(' ').map( (word) => {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.slice(1, -1) + word[0]
  }).join(' ');
}

function swap3(string) {
  return string.replace(/\b([a-z])([a-z]*)([a-z])\b/gi, '$3$2$1');
}

function swap4(words) {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

let x = Date.now();
for (let i = 0; i < 100000; i++) {
  swap('Oh what a wonderful day it is');
}
console.log(Date.now() - x);

x = Date.now();

for (let i = 0; i < 100000; i++) {
  swap2('Oh what a wonderful day it is');
}
console.log(Date.now() - x);

x = Date.now();

for (let i = 0; i < 100000; i++) {
  swap3('Oh what a wonderful day it is');
}
console.log(Date.now() - x);

x = Date.now();

for (let i = 0; i < 100000; i++) {
  swap4('Oh what a wonderful day it is');
}
console.log(Date.now() - x);

x = Date.now();

// console.log(swap('Oh what a wonderful day it is'));

// console.log(runningTotal([14, 11, 7, 15, 20]));