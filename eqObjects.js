//Week 01, Day 03
//Implement eqObjects
//Lotide Challenge
//Anil Patel


/* Logic 
 * assertEqual only compares primitive values. ie compare arrays needed assertArraysEqual 
 * Do so with objects to run clean test code
 * Does not support objects containing objects
 */

// TEST / ASSERTION FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed "👍👍👍": ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed "👎👎👎": ${actual} !== ${expected}`)
    return false;
  } 
};

function eqArrays(array1, array2){  //compare equality
  if (array1.length !== array2.length) {
    return false;
  } else {  
    for (let i = 0; i < array1.length; i++) { //check item at same index if the same; 
      if(array1[i] !== array2[i]) {  //end condition is not equal
      return false; 
      } 
    }
  } 
  return true; //return boolean
};

// FUNCTION eqObjects:

// Returns True if both objects have identical keys with identical values
// Returns False, otherwise 

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length === obj2Keys.length) { //compare lengths, not equal returns false
    for (const key1 of obj1Keys) {
      for (const key2 of obj2Keys) {
        if (key1 === key2) {  ///compare both objects values for that key
          if (Array.isArray(object1[key1])) { //if both arrays, pass to eqArrays, ensure true
            if (!eqArrays(object1[key1], object2[key2])) {  //no match, return false 
              return false;
            }
          } else if (object1[key1] !== object2[key2]) { //assumes primitives, compares values 
            return false;
          }
        }
      }
    }
  } else {
    return false;
  }
  return true;  //only reach true if all keys match
};


//TESTING CODE 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// Tests: Objects have Array Values 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const Niners = { a: [1, 2, 3], b: [3, 3, 4]};
const Packers = { a: [1, 2, 3], b:[3, 2, 4]}
assertEqual(eqObjects(Niners, Packers), false); // => false