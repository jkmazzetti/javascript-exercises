const getTheTitles = function (arrayOfBooks) {
    let arrayOfTitle = [];
    for (let book of arrayOfBooks) {
        arrayOfTitle.push(book.title);
    }
    return arrayOfTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
