const repeatString = function (string, times) {
    let newString = "";
    if(times>=0){
    for (let i = 0; i < times; i++) newString += string;
    }else{
        newString = "ERROR";
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
