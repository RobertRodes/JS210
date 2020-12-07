function gcdTwo(a, b) {
  if(b === 0) {
      return a;
  } else{ 
    return gcdTwo(b, a % b);
  }
}

function gcd(arr) {
  let result = arr.pop();

  while(arr.length > 0) {
    result = gcdTwo(result, arr.pop());
  }

  return result;
}

function gcd2(arr) {

  function gcdInner(a, b) {
    if(b === 0) {
        return a;
    } else{ 
      return gcdInner(b, a % b);
    }    
  }

  let result = arr.pop();
  while(arr.length > 0) {
    result = gcdInner(result, arr.pop());
  }

  return result;
}

console.log(gcd2([64, 72, 144, 96, 2496]));