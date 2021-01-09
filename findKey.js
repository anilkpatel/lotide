//Lighthouse Labs 
//Week 1, Day 4
//Implement findKey, Lotide Assignment
//Anil Patel

/* Pseudocode
// findKey takes in 2 parameters: 
 - Object  
 - callback function
// loop over object key, there 'for in' not 'for of'
// Use the eqObjects for testing 
// Scans object, returns first key that callback returns Truthy for
// No key found, then return undefined
// get key of 1st Object, 
// 2nd Object (ratings) is the value of 1st Object's keys 
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

//DO I NEED eqObjects??

//FUNCTION findKey 

const findKey = function(object, callback) {
  for (let item in object) { // Stop loop thru object once get first key
  //console.log(item) //1st layer is key, 2nd layer is ratings
    if (callback(object[item])) {
      //console.log(item) // key of the first object
      return item;  //use return ie. shows  
    } 
  }    
  return undefined; //looped thru object and found nothing 
}

//CALLBACK FUNCTION:

//console.log(findKey(x => x.stars === 3));  // test it 

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const result2 = findKey ({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 11) // => "undefined"

assertEqual(result1, "noma"); // => Fail, will stop at noma 
assertEqual(result2, "noma"); // => Fail, will stop at noma

//Basic Logic of test
/*
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined); // => Fail, and stop at noma 
*/
