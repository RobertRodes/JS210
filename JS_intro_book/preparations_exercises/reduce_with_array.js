function oddLengths(arr) {
  return arr.reduce((accumulator, element) => {
    if (element.length % 2 === 1) accumulator.push(element.length);
    return accumulator;
  }, []);
}