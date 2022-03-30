const { describe } = require('mocha');
var expect = require('chai').expect;
const { findFirstIndexOfElement } = require('./firstIndex');
const { findMedianSortedArrays } = require('./findMedianSortedArrays');

describe('findFirstIndexOfElement', () => {
  it('should return the correct index for the element', () => {
    const res = findFirstIndexOfElement(65, [1, 5, 4, 65, 7, 655, 65]);
    expect(res).to.equal(3);
  });

  it('should return the correct index for the element if it is a string', () => {
    const res = findFirstIndexOfElement('hello', [
      'world',
      'you',
      'there',
      'hello',
    ]);
    expect(res).to.equal(3);
  });
});

describe('findMedianSortedArrays', () => {
  it('should return the median of sorted arrays - odd', () => {
    const res = findMedianSortedArrays([1, 3], [2]);
    expect(res).to.equal(2.0);
  });

  it('should return the median of sorted arrays - even', () => {
    const res = findMedianSortedArrays([1, 2], [3, 4]);
    expect(res).to.equal(2.5);
  });

  it('should return the median of sorted arrays - even, big numbers', () => {
    const res = findMedianSortedArrays([344, 899, 1001], [1222, 1224, 3000]);
    expect(res).to.equal(1111.5);
  });
});
