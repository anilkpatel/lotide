//Week 01, Day 03
//Implement letterPositions
//Lotide Challenge
//Anil Patel

/* Pseudocode
// For each letter, instead of returning just one number to represent its number of occurrences
// Multiple numbers needed to represent all the places in the string it occurs 
// Output will be { l: [0] i: [1, 11]} etc object of letter with numbers of positions of objects
// {h:[0], e[1], l: [2,3], o:[4]}
*/


const letterPositions = function(sentence) {
  const results = {};
  //console.log(sentence[0]); //access charac string if we know position 
  //console.log(sentence.length); //how long is string 
    for(let i = 0; i < sentence.length; i++) { 
    //console.log(sentence[i]); //each character as go thru loop
    const character = sentence[i];
    if (!results[character]) {   // if no character in results object 
      results[character] = [i]; // make array  
     } else { 
      results[character].push(i) //push position into array
     }   
  } 
  console.log(results);
  return results;
};

//Testing Functions:

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

const assertArraysEqual = function(actual, expected) {  //will use eqArrays to check (gives T or F), declare fn
  if (eqArrays(actual, expected)) { //need value here using eqArrays, T of F if call it with 2 arrays. takes in 2 arguments, eval arrays 1 and arrays 2
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if it is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
};

// Test Cases 

assertArraysEqual(letterPositions("hello").e, [1]); 
// 2 parameters: 'actual' up to letter .e and 'expected' [1]
assertArraysEqual(letterPositions("delicious").e, [1]); 

//check running of the function  
//letterPositions("hello")
//const positions = letterPositions("hello")
//console.log(positions.e)
/*{h:[0], e[1], l: [2,3], o:[4]}*/