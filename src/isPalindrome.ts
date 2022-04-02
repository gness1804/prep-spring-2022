const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

module.exports = { isPalindrome }