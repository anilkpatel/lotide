// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]")
    return true;
  } else { //else runs if is false
    console.log("Assertion Failed: [actual] !== [expected]")
    return false;
  } 
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //test if equivalent?
assertEqual(1, 1); //test if equivalanet? 

//Pseudocode:
//return a boolean, and tell if equivalent
//expect to get 2 arguments
//pass strings individually; 2 separate arguemnts for fn of actual and expected

console.assert(assertEqual("Bootcamp", "Bootcamp"));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
    return false;
  } 
  
}

//Pseudocode: 
//Back ticks allow to interporlate variables into strings

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //equal
assertEqual(1, 1); //equal

console.assert(assertEqual("Bootcamp", "Bootcamp"));


/* CHALLENGE: IMPROVE assertEqual
Update our Lotide assertEqual function to use template literals when generating the output string.
This challenge assumes that you used + to concatenate values together for console.log.
*/

/*
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //return actual === expected;

};
*/

/*
Make the function compare the two values it takes in
Print out a message telling us if they match or not. 

//QUESTION:
//Before you run the code written thus far in assertEqual.js, ask yourself: What is the expected output and why?

//ANSWER:
//no output if only left as is. 
//Because we call the function but the function itself does nothing? 
//Sure, but more specifically because we are not printing/logging anything to the console anywhere.

*/
