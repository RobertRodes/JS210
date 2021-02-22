function is_BlockWord(word) {
  let blocks = 'B:O X:K D:Q C:P N:A G:T R:E F:S J:W H:U V:I L:Y Z:M'
               .split(' ').map( (block) => block.split(':') );

  let retval = true;
  word.toUpperCase().split('').forEach( (char) => {
    let blockCount = blocks.length;
    blocks = blocks.filter( (arr) => {
      return !arr.includes(char);
    })

    if (blocks.length === blockCount) retval = false;
  });

  return retval;
}

function isBlockWord(word) {
  const blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
  const regExps = blocks.map(block => new RegExp(block.replace(':', '|'), 'gi'));

  return regExps.every(regExp => (word.match(regExp) || []).length < 2);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
