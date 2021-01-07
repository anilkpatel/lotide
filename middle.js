//Week 01, Day 03
//Implement middle
//Lotide Challenge
// Anil Patel

/* INSTRUCTIONS:
* Implement middle which will take in an array and return the middle-most element(s) of the given array.
* The middle function should return an array with only the middle element(s) of the provided array. 
* Length of the returned elements could vary. 
*/

// TEST / ASSERTION FUNCTIONS 

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

//ACTUAL FUNCTION

/*Pseudocode:
* Implement middle which will take in an array and return the middle-most element(s) of the given array.
* use property length to operate onuneven case: divide by 2
* even case: divide by 2, Math.round -1
* even case: divide by 2, Math.round //one index higher 

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/

const middle = function(array) { //takes in one array, what is the middle number(s) to compare 
  if(array.length <= 2 )  {
    return [];  
  } else if (array.length % 2 === 0) {
    //return [array[Math.round(array.length / 2) - 1]]; 
    return [array[Math.round(array.length / 2) - 1], array[Math.round(array.length / 2)]]; //round the half of array length
  } else {
    return [array[Math.round(array.length / 2)]];
  }
};

// TEST CODE
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([5]), []); //should return success for empty array2
assertArraysEqual(middle([5,6]), []); 
assertArraysEqual(middle([5,6,7]), [6]); //THIS NOT WORK!!
assertArraysEqual(middle([5,6,7,8]), [6,7]);




