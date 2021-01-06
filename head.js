//Week 01, Day 01
//Implement head
//Lotide Challenge

/* INSTRUCTIONS:

https://lodash.com/docs/4.17.15#head

Create a function head which returns the first item in the array.
The head function should not return the first element as an array. 
It should simply return the element itself.

Use assertEqual to write test cases for various scenarios. 

You should always be thinking about other scenarios to consider. Here are some such examples and how they should be handled:

    An array with only one element should still yield that one element as its head
    An empty array should yield undefined as its head
*/

function head(array) {
  //const number = array[0]; //return the element itself, not as array
  return array[0]
}

//These two could work
/*
function head(array) {
  const number = array[0]; //return the element itself, not as array
  return number;
}

const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;  //slice good for remove 1st few elements of array
};
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
};

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);

