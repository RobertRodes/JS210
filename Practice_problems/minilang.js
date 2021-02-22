function popIt(stack) {
  if (stack.length === 0) {
    throw 'Error 8080: attempted to POP from empty stack.';
  } else {
    return stack.pop();
  }
}

function tokenError(cmd) {
  throw `Error 8088: token '${cmd}' not found in instruction set.`;
}

function minilang(punchCard) {
  let register = 0;
  const stack = [];

  punchCard.split(' ').forEach((cmd) => { 
    switch(cmd) {
      case 'PUSH' :
        stack.push(register);
        break;
      case 'ADD':
        register += popIt(stack);
        break;
      case 'SUB':
        register -= popIt(stack);
        break;
      case 'MULT':
        register *= popIt(stack);
        break;
      case 'DIV':
        register = Math.floor(register / popIt(stack));
        break;
      case 'MOD':
        register %= popIt(stack);
        break;
      case 'POP':
        register = popIt(stack);
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        if (/\d/.test(cmd)) {
          register = Number(cmd);
        } else {
          tokenError(cmd);
        }
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


minilang('3 PUSH 5 MOD PUSH 7 PUSH 4 PUSH 5 MULT PUSH 3 ADD SUB DIV PRINT');
// (3 + (4 * 5) - 7) / (5 % 3) = 8

// minilang('POP');
// error 8080

// minilang('3 PUSH 5 MOD PUSH 7 PUSH 4 PUSH PUNT 5 MULT PUSH 3 ADD SUB DIV PRINT');
// error 8088
