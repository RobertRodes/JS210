function star(size) {
  let rows = [];
  let topSize = Math.floor(size / 2);
  for (let row = 0; row < topSize; row++) {
    rows.push(
      ' '.repeat(row) + '*' + 
      ' '.repeat((topSize - 1) - row) + '*' + 
      ' '.repeat((topSize - 1) - row) + '*'
    );
  }

  rows = rows.concat([...rows].reverse());
  rows.splice(topSize, 0, '*'.repeat(size));
  rows.forEach( row => console.log(row) );
}

star(17);