function UnReverseWord(word) {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }

  return result;
}

function reverseSentence2(sentence) {
  let result = '';
  let word = '';
  for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] === ' ') {
      result += UnReverseWord(word) + ' ';
      word = '';
    } else {
      word += sentence[i];
    }
  }

  result += UnReverseWord(word);

  return result;
}

function reverseSentence(sentence) {
  let words = [];
  let word = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      words.push(word);
      word = '';
    } else {
      word += sentence[i];
    }
  }

  let result = word;
  while (words.length > 0) {
    result += (' ' + words.pop());
  }

  return result;
}

function reverseSentence1(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence('Reverse these words'));
