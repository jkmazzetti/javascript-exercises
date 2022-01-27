const removeFromArray = function (array) {
    let elementsToDelete = Array.prototype.slice.call(arguments);
    for (let element of elementsToDelete) {
        console.log(element);
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
    }
    console.log(array);
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;


/*
What's the difference between == and ===?

1=="1" is true, while 1==="1" is false.

*/