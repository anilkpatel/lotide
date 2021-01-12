//Week 01, Day 03 and W02, Day 01 
//Lotide Refactor Example
//Lotide Challenge with Refactoring 
//Anil Patel

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  })
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
  it("returns Bootcampp for [Bootcampp, Bootcamp]", () => {
    assert.strictEqual(head(["Bootcampp", "Bootcamp"]), 'Bootcampp');
  });  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 6 for [6, 6]", () => {
    assert.strictEqual(head([6, 6]), 6);
  }); 
});


/*
const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);
*/