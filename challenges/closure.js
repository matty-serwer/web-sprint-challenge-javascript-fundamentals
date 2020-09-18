// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* 

A nested function can use closure to access variables outside of itself, in the greater function scope, when the variable is not found within the nested function.
*/


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

console.log("### COUNTER ###");

let counter = 0;

function count() {
  return counter++;
}

function summation(num) {
  let tally = 0;
  for(let i = 0; i <= num; i++){
    tally += count();
  }
  return tally;
}

console.log(summation(4));