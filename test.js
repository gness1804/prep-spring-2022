const { describe } = require('mocha');
var expect = require('chai').expect;
const { findFirstIndexOfElement } = require('./firstIndex');

describe('findFirstIndexOfElement', () => {
  it('should return the correct index for the element', () => {
    const res = findFirstIndexOfElement(65, [1, 5, 4, 65, 7, 655, 65]);
    expect(res).to.equal(3);
  });

  it('should return the correct index for the element if it is a string', () => {
    const res = findFirstIndexOfElement('hello', ['world', 'you', 'there', 'hello']);
    expect(res).to.equal(3);
  });
});
