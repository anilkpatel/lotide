//Week 01, Day 02
//Implement eqArrays
//Lotide Challenge

/* INSTRUCTIONS:
* Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 
* Use assertEqual to write test cases for various scenarios. 
*/

//Pseudocode
//eqArrays finds if equal, takes in 2 arrays ie. Arugment 1 and 2, T or F
// before check properties of arrays ie length or not an array
//assertEqual will log them out, yes or no

function eqArrays(array1, array2){  //does work for us, compare equality
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

const assertEqual = function(actual, expected) {  //will use eqArrays to check (gives T or F), declare fn
  if (eqArrays(actual, expected)) { //need value here using eqArrays, T of F if call it with 2 arrays. takes in 2 arguments, eval arrays 1 and arrays 2
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
  
};

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 3, 10], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([4], [1, 2, 3]), false); // => should PASS

//assertEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
//assertEqual(["1", "2", "3"], ["1", "2", 3]) // => false

//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false


