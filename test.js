const { describe } = require('mocha');
var expect = require('chai').expect;
const { findFirstIndexOfElement } = require('./src/firstIndex');
const { findMedianSortedArrays } = require('./src/findMedianSortedArrays');
const { isPalindrome } = require('./src/isPalindrome');
const { isValidParens } = require('./src/isValidParens');
const { it } = require('mocha');

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

describe('isPalindrome', () => {
  it('should validate whether a string is a palindrome', () => {
    const str = 'A man, a plan, a canal: Panama';
    const res = isPalindrome(str);
    expect(res).to.equal(true);
  });

  it('should validate whether a string is a palindrome', () => {
    const str = 'race a car';
    const res = isPalindrome(str);
    expect(res).to.equal(false);
  });

  it('should validate whether a string is a palindrome', () => {
    const str = '';
    const res = isPalindrome(str);
    expect(res).to.equal(true);
  });
});

describe('isValidParens', () => {
  it('should reject if string has invalid characters', () => {
    const str = '()a';
    expect(isValidParens(str)).to.equal(false);
  });

  it('should validate whether the brackets are correct in a string (simple pair)', () => {
    const str = '()';
    expect(isValidParens(str)).to.equal(true);
  });

  it('should validate whether the brackets are correct in a string (multiple pairs)', () => {
    const str = '()[]{}';
    expect(isValidParens(str)).to.equal(true);
  });

  it('should validate whether the brackets are correct in a string (mismatched chars)', () => {
    const str = '(]';
    expect(isValidParens(str)).to.equal(false);
  });

  it('should validate whether the brackets are correct in a string (complex mismatched chars)', () => {
    const str = '([)]';
    expect(isValidParens(str)).to.equal(false);
  });

  it('should validate whether the brackets are correct in a string (complex matched chars)', () => {
    const str = '([])';
    expect(isValidParens(str)).to.equal(true);
  });

  it('should validate whether the brackets are correct in a string (orphaned second char)', () => {
    const str = ']';
    expect(isValidParens(str)).to.equal(false);
  });

  it('should validate whether the brackets are correct in a string (complex orphaned char case)', () => {
    const str = '[][][][]]';
    expect(isValidParens(str)).to.equal(false);
  });

  it('nasty edge case', () => {
    const str = '(])';
    expect(isValidParens(str)).to.equal(false);
  });
});
