var isValidParens = function (str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === '[' || char === '{' || char === '(') {
            stack.push(char);
        }
        else {
            if (stack.length === 0)
                return false;
            var lastItemInStack = stack[stack.length - 1];
            if (char === ']') {
                if (lastItemInStack !== '[')
                    return false;
            }
            else if (char === '}') {
                if (lastItemInStack !== '{')
                    return false;
            }
            else if (char === ')') {
                if (lastItemInStack !== '(')
                    return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};
module.exports = { isValidParens: isValidParens };
