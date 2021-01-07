//Week 01, Day 03
//Implement countOnly in Lotide
//Lotide Challenge
//Anil Patel

// TEST / ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
    return false;
  } 
};

// ACTUAL FUNCTION

/*Pseudocode:
// function countOnly returns report (coutns) on strings input array 
// Returns an object 
//function passes allItems array 
// loop thru
// if passes, returns number of names, 
// allItems: array of strings to go thru
// itemsToCount: Object specifying WHAT to count

*/
const countOnly = function(allItems, itemsToCount) {
  const results = {} //result 1 was undefined

  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) { //if condition to only increment count in results if the item is found in the itemsToCount object.
    if (results[item]) { // increment the counter for each item:
      results[item] += 1; //set a property with that string key to:
    } else {
      results[item] = 1; // the value that was already there (or zero if nothing there) with 1 added to it.
    }
  }
}
  return results;
}

/* 
//More advanced solution talking to mentor
const countOnly = function(allItems, itemsToCount) {

    let finalCount = { } 
    for(let item of allItems) {  //loop thru array of allItems is firstNames array; each item is name
      if(itemsToCount[item]) {  //itemsToCount is object of key value pair, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
                                //if itemsToCount, accessed by key, ie Karl, is false
                                //if itemsToCount, accessed by key, ie Feng, is true)
        if(!finalCount[item]) finalCount[item] = 1 
        else finalCount[item]++ //
        } 
    }
  return finalCount //result for { }
}
*/

// TEST CODE

/*Pseudocode:
* array of allItems is firstNames array; each item is name
* assertEqual can only compare Primitive values, therefore, break into 3 assertion tests

*/

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined); //value is false
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); //value is false

