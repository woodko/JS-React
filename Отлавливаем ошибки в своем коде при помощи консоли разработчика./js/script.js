'use strict';

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);