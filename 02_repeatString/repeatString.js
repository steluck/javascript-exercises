const repeatString = function(stringInput, number) {
    let response = '';
    if (number < 0) {
        response = 'ERROR';
    }
    else {
        for (let i = 0; i < number; i++) {
            response += stringInput;
        }    
    }
    return response;
};

// Do not edit below this line
module.exports = repeatString;
