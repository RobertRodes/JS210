let rlSync = require('readline-sync');
function getString(msg) {
  return rlSync.question(msg);
}

let first_name = getString("What's your first name? ");
let last_name = getString("What's your last name? ");
console.log(`Hello, ${first_name} ${last_name}!`);