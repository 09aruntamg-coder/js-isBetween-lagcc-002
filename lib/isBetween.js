'use strict';

let isBetween = function(num, min, max){
    if (num > min && num < max) {
        return true;
    }
    return false;
};
console.log(isBetween(3, 1, 5));