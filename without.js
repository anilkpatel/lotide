//Week 01, Day 02
//Implement without
//Lotide Challenge
// Anil Patel

/* INSTRUCTIONS:
* Documentation: https://lodash.com/docs/4.17.15#without
* Implement without which will return a subset of a given array, removing unwanted elements. 
* This function should take in a source array and a itemsToRemove array. 
* It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

//Pseudocode:
// Call function inside a function using without
// Run eqArrays and AsserArrays Equal to check running  
// NOT passing function into another 

const without = function (array1, array2){
  let assertArraysEqual = [];  
  
  for (let i = 0; i < array1.length; i++) { //check item at same index if the same; not nested for loop, not need both 1 and 2
    if(!array2.includes(array1[i])) //evaluating array1[i], pass it in a value, if arr2 has it: true, if not allow for loop to contine
  {
    assertArraysEqual.push(array1[i]) //insert into new array, value iterating array1[i], only eval if true
    } 
  } 
  return assertArraysEqual; //return
}

//These two only there to test without 
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
  } else { //else runs if is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
};

console.log(assertArraysEqual(without([1,2,3,8, 9], [6,7,8]), [1,2,3,9]));

