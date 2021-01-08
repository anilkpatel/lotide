//Week 01, Day 03
//Implement countLetters in Lotide
//Lotide Challenge
//Anil Patel

/* Pseudocode
//countLetters takes in a String as a sentence 
//returns an Object
  - each unique character encountered in the string is a property of the object
  - value for that property/key should be the number of occurrences for that character
// { l: 2, i: 3}   
*/

// Arrow Function using for...of

const countLetters = (string) => {
  const letterCount = {}
  for (const letter of string) { 
    if ( letter === ' ') {
      continue;
    }
    //console.log(letter); test if can print the key
    if (letterCount[letter]) { // if letter is there 
      letterCount[letter] += 1;
    } else { // if letter not present, make new key 
      letterCount[letter] = 1;
    }
  } console.log(letterCount);
  return letterCount;
}

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

//TEST CODE

countLetters("the lighthouse is lit")
countLetters("long day living in recida")



