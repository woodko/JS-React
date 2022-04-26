'use strict';

const usdCurr = 28;
const discount = 0.8;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

// convert(500, usdCurr);

const res = convert(500, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);


function getMathResult(num1, num2) {
    let out = '';
    for (let i = 1; i <= num2; i++) {
        if (i == num2) {
            out += num1 * i;
        } else {
            out += num1 * i + '---';
        }



    }
    if (typeof (num2) != 'number' || num2 === 0 || num2 < 0) {
        return num1;
    } else {
        return out;
    }
}

getMathResult(5, 3);