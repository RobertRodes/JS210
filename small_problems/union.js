function union(...args) {
  return [...new Set(args.flat())];
}

console.log(union([1,2,3], [3,6,9]));