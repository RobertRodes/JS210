let generatePattern = function(nStars) {
  let line = '';
  for (let i = 1; i <= nStars; i++) {
    line += i.toString();
  }

  let lineLength = line.length;

  for (i = 1; i <= nStars; i++) {
    line = '';
    for (let j = 1; j <= i; j++) {
      line += j.toString();
    }

    line += '*'.repeat(lineLength - line.length);
    console.log(line);
  }

}

generatePattern(24);