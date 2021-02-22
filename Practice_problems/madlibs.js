function rand(max) {
  return Math.floor(Math.random() * max);
}

function madlibs(template) {
  const WORDS = {
    adj: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adv: ['easily', 'lazily', 'noisily', 'excitedly'],
  }

  const getWord = (match) => {
    let key = match.replace(/`/g, '');
    let size = WORDS[key].length;
    return `${WORDS[key][rand(size)]}`;
  }

  return template1.replace(/`\w+`/g, getWord);
}

const template1 = 'The `adj` `adj` `noun` `adv` `verb` the `adj` yellow `noun`, who `adv` `verb` his `noun` and looks around.'
console.log(madlibs(template1));

