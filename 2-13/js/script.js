"use strict";

if (4 == 9) {
    console.log('OK');
} else {
    console.log('ERROR');
}



// if (num < 49) {
//     console.log('ERROR');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK');
// }

(num === 50) ? console.log('Ok'): console.log('ERROR'); //тернарный аргумент

// 4 + 4 // бинарный аргумент
// +'4'; // унарный аргумент

const num = 50;

switch (num) {
    case 49:
        console.log('ERROR');
        break;
    case 100:
        console.log('ERROR');
        break;
    case 51:
        console.log('TRUE');
        break;
    default:
        console.log('Nothing');
        break;
}