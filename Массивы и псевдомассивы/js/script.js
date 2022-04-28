'use strict';

const arr = [56, 2, 3, 13, 5, 6];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // arr[99] = 0; // так не делать
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop(); // убрать последний
// arr.push(7); // добавить в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


const str = prompt("", "");
const products = str.split(", ");
products.sort();
// console.log(products.split);
console.log(products.join("; "));