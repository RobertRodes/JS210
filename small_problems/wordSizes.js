function wordSizes(string) {
  // if (string === '') return {};

  let sizes = {};
  let words = string.split(' ');

  for (i = 0; i < words.length; i++) {
    if (words[i] === '') continue;

    let size = words[i].length;

    if (size in sizes) {
      sizes[size] += 1;
    } else {
      sizes[size] = 1;
    }
  }

  return sizes;
}

function wordSizes(string) {
  if (string === '') return {};

  return string.replace("'", '').match(/\w+/g).reduce((sizes, word) => {
    let len = word.length;
    sizes[len] = (sizes[len] || 0 ) + 1
    return sizes;
  }, {});
}

function wordSizes2(string) {
  return string.replace("'", '').match(/\w*/g).reduce((sizes, word) => {
    let len = word.length;
    if (len !== 0) sizes[len] = (sizes[len] || 0 ) + 1
    return sizes;
  }, {});
}

let x = Date.now();
for (let i = 0; i < 1000000; i++) {
  wordSizes("What's up doc?")
}
console.log(Date.now() - x);

x = Date.now();
for (let i = 0; i < 1000000; i++) {
  wordSizes2("What's up doc?")
}
console.log(Date.now() - x);

// console.log(wordSizes('Four score     and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));