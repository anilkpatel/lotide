//Lighthouse Labs 
//Week 1, Day 4
//Implement takeUntil, Lotide Assignment
//Anil Patel

/* Pseudocode
//takeUntil takes in 2 parameters: 
- working array 
- callback function
//returns slice of array elements, taken from beginning, until callback hits truthy
//Write test cases to compare return value against expected array, also use use assertArraysEqual (and eqArrays) 
*/

//takeUntil function

const takeUntil = function(array, callback) {
  const taken = [];
  
  for (let item of array) { // Stop the loop thru array once callback returns a truthy value
    if (callback(item)) {  // call callback here to compare 
        return taken;  //use return. break would stop it but returns nothing 
    } else {
      taken.push(item);
    }
  }    
  return taken;
}

//Callback functions

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // is 1 < 0 etc. need this argument for testing 
console.log(results1);

console.log('---');
  
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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

// TEST CODE

console.log(eqArrays(results1, [1, 2, 5, 7, 2]))
console.log(eqArrays(results2, ["I've", "been", "to", "Hollywood"]))

