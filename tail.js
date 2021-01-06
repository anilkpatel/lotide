//Week 01, Day 01
//Implement tail
//Lotide Challenge
//Anil Patel

/* INSTRUCTIONS:

https://lodash.com/docs/4.17.15#tail

The "tail" of an array. 
The tail is not the last element of the array. 
The tail is meant to be every element except the head (first element) of the array.

Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
Your function should not modify the array that is passed in. 
It should return a new array.

*/

//is this better approach???
  const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;  //slice good for remove 1st few elements of array
};

/*
function tail(array) {
  //const numbers = array[1]; //return a new array; not modify array passed in 
  //return numbers.slice;
  const numbers = array.shift(); //not modify array, can't use shift but copy 
  return numbers;
}
*/
  console.log(tail([1, 2, 3]));

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

// TEST CODE
//update the conditional 
assertArraysEqual(tail([5,6,7]), [6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

//test that will fail
assertArraysEqual(tail([5,6,7]), [5,6,7]);


