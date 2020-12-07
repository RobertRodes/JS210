function splitString(str, del) {
  if (del === undefined) {
    console.log('ERROR: no delimeter');
    return;
  }

  let segment = '';
  for (let i = 0; i < str.length; i++) {
    if (del === '') {
      console.log(str[i]);
    } else if (str[i] === del) {
      console.log(segment);
      segment = '';
    } else {
      segment += str[i];
    }
  }

  if (segment != '') {
    console.log(segment);
  }
}

splitString('abc,123,hello world', ',');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello', ';');
splitString('hello')
