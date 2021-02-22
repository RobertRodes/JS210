function diamond(size, hollow = false) {
  let i;

  function getPadding() {
    return ' '.repeat(Math.floor((size - i) / 2))
  }

  function getRow() {
    let padding = getPadding();
    let stars = '*'.repeat(i);
    if (hollow) stars = stars.replace(/(?!^.|.$)./g, ' ');
    return padding + stars;
  }

  for (i = 1; i <= size; i += 2) {
    console.log(getRow());
  }

  for (i = size - 2; i >= 1; i -= 2) {
    console.log(getRow());    
  }
}

diamond(9, true);