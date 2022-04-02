var isPalindrome = function (str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};
module.exports = { isPalindrome: isPalindrome };
