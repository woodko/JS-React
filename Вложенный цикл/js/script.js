'use strict';

// for (let i = 0; i < 3; i++) {
//     console.log(i + ' circle');
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const len = 7;

// for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// метка
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 != 0) {
            console.log(i);
        }
        i++;
    }
}

fourthTask();