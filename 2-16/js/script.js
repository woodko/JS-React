'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

// function calc(a, b) {
//     return (a + b);
//     console.log('не выполнится');
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num;
}

const logger = function () {
    console.log("Hello");
};

logger();


// стреочная функция

const calc = (a, b) => {
    return a + b
};