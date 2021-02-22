function wordWrap(string, width) {
  let wrapped = '';
  let idx1 = 0;
  let idx2 = width - 1;

  while (idx1 < string.length - width) {
    let nextSpaceIndex = string.substring(idx1, idx1 + width + 1).lastIndexOf(' ');

    if (nextSpaceIndex === -1) {
      idx2 = idx1 + width - 1;
      wrapped += string.substring(idx1, idx2) + "-\n";
      idx1 = idx2;
    } else {
      idx2 = idx1 + nextSpaceIndex;
      wrapped += string.substring(idx1, idx2) + "\n";
      idx1 = idx2 + 1;
    }
  }

  wrapped += string.substring(idx1);

  return wrapped;
}

function printLine(endChar, char, width) {
  console.log(`${endChar + char.repeat(width + 2) + endChar}`);
}

function printBorder(width) {
  printLine('+', '-', width);
}

function printPadding(width) {
  printLine('|', ' ', width);
}

function printString(string, width) {
  let strArray = wordWrap(string, width).split("\n");

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] += ' '.repeat(width - strArray[i].length + 1) + '|';
    strArray[i] = '| ' + strArray[i];
  }

  console.log(strArray.join("\n"));
}

function logInBox(string, width = string.length) {
  printBorder(width);
  printPadding(width);
  printString(string, width);
  printPadding(width);
  printBorder(width);
}

logInBox('To boldly go where no one has gone before.');

let string = 'Four score and seven years ago, our fathers brought forth upon this continent a new nation, conceived in liberty, and dedicated to the principle that all men are created equal.';
logInBox(string, 30);
