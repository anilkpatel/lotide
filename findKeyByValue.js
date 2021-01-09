//Week 01, Day 03
//Implement findKeyByValue in Lotide
//Lotide Problem
//Anil Patel

/* Pseudocode
* findKeyByValue takes in:
- object
-value 
* Scans the object and return the first key which contains the given value. 
* If no key with given value, returns undefined.
*/

// TEST / ASSERTION FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
};


//findKeyByValue function

const findKeyByValue = function(allShows, favShow) {
  const keyFound = Object.keys(allShows); 

  for (let key of keyFound) { // Stop the loop thru array once get first key
    if (allShows[key] === favShow) {
        return key; 
    } 
  }
  //return findKeyByValue;
  return undefined;
}; 

//TEST CASE CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


