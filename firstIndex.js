/**
* Challenge: find the first index of an element in an array. Example: for [1, 2, 3], if the target is 3, the answer is 2. If element is not found, should be -1
*
* @param {any} elem - an element which can be any JS primitive.
* @param {Array<any>} array - an array of elements.
* @returns {number} - returns the index position or -1 if not found.
*/

const findFirstIndexOfElement = (elem, array) => {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      result = i;
      break;
    }
  }
  return result;
}

const res = findFirstIndexOfElement(65, [1, 5, 4, 65, 7, 655, 65])
console.log('res:', res);