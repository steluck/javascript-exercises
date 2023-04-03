const sumAll = function(firstInt, lastInt) {
    let output = 0;
    if (Number.isInteger(firstInt) && Number.isInteger(lastInt)) {
        if (firstInt >= 0 && lastInt >= 0) {
            let bigInt = 0;
            let smallInt = 0;
            if (firstInt > lastInt) {
                bigInt = firstInt;
                smallInt = lastInt;
            } 
            else {
                bigInt = lastInt;
                smallInt = firstInt;
            }
            for (let i = smallInt; i <= bigInt; i++) {
                output += i;
            }        
        } else output = 'ERROR';
    } else output = 'ERROR';
    return output;
};

// Do not edit below this line
module.exports = sumAll;
