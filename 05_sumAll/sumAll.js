const sumAll = function(first, second) {
    let result=0;
    if(typeof(first) !== 'number' || typeof(second) !== 'number' ){
        result ="ERROR";
    }else if(first>=0 && second>=0){
        if(first!=second){
            for(let i=0; i<=Math.max(first,second); i++){
                result +=i;
            }
        }else{
            result = first;
        }
    }else{
        result ="ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
