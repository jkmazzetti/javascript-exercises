const fibonacci = function (numberOfTimes) {
    let previous = 0;
    let next = 1;
    if (Number(numberOfTimes) !== 'NaN' && numberOfTimes >= 0) {
        for (let i = numberOfTimes; i > 1; i--) {
            next += previous;
            previous = next - previous;
        }
    } else {
        next = "OOPS";
    }
    return next;

};

// Do not edit below this line
module.exports = fibonacci;
