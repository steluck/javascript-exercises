const reverseString = function(input) {
    let output = '';
    for (i = input.length; i > 0; i--) {
        output += input[i-1];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
