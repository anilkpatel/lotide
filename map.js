//Lighthouse Labs 
//Week 1, Day 4
//Implement Map, Lotide Assignment
//Anil Patel

/*Pseudcode
* map function takes 2 arguments 
-An array to map
-A callback function
* map function return new array using results of callback 
* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

//Implement Map

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

//TESTING Functions

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
    console.log(`Assertion Failed :"🍇": ${actual} !== ${expected}`)
    return false;
  } 
  
};

//TEST CODE for Implement Map
//use const to call map fn, and takes array and compares
//const results1 = map(words, word => word[0]);
console.log(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]))
console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]))
console.log(eqArrays([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]))
const numbers = [1, 2, 3]
const results2 = map(numbers, number => number * 2)
console.log(eqArrays(results2, [2, 4, 6]))


