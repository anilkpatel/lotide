//Week 01, Day 02
//Implement assertArraysEqual
//Lotide Challenge
// Anil Patel

/* INSTRUCTIONS:
* Implement assertArraysEqual which will take in two arrays 
and console.log an appropriate message to the console
* The message similar to assertEqual. Refer to code for assertEqual to help.
Instead of doing a simple === check though, this assertion function will 
make use of your eqArrays function for array comparison.

* Functions that do not return values and instead print out messages to the console 
harder to test using assertions. 
* This is because we cannot simply compare their return value to an expected value.

* So not be writing assertions (test code) for assertArraysEqual. 
* Call function below delaration instead to test message printed
*/

function eqArrays(array1, array2){  
  if (array1.length !== array2.length) {
    return false;
  } 
  for (let i = 0; i < array1.length; i++) { //check item at same index if the same; not nested for loop, not need both 1 and 2
    if(array1[i] !== array2[i]) {  //end condition is not equal
    return false; 
    } 
  } 
  return true; //return boolean
}

const assertArraysEqual = function(actual, expected) {  //will use eqArrays to check (gives T or F), declare fn
  if (eqArrays(actual, expected)) { //need value here using eqArrays, T of F if call it with 2 arrays. takes in 2 arguments, eval arrays 1 and arrays 2
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if it is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
  
};

//assert will pass the two arrays themselves; 
//pass the arguments for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([4], [1, 2, 3]); // => should FAIL