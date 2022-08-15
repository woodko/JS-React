// 'use strict';

// const p = document.querySelectorAll('p');

// console.log(p);

// // const script = document.createElement('script');
// // script.src = "js/test.js";
// // script.async = false;
// // document.body.append(script);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = true;
//     document.body.append(script);
// };

// loadScript("js/test.js");
// loadScript("js/some.js");


// function digital_root(n) {
//     let arr = n.toString().match(/.{1,1}/g);
//     let out = 0;
//     if (arr.length > 1) {
//         for (let i = 0; i < arr.length; i++) {
//             out += +arr[i];
//         }
//         return digital_root(out);
//     }
//     return n;
// }

// // function digital_root(n) {
// //     return (n - 1) % 9 + 1;
// // }

// console.log(digital_root(157));

input = ["red", "green", "red", "blue", "blue"];

result = {};

function numberOfPairs(gloves) {
    let out = 0;
    for (let i = 0; i < gloves.length; i++) {
        gloves.forEach(item => {
            if (gloves[i] === item) {
                out += 1;
            }
        });
    }
    console.log(out);
}

console.log(numberOfPairs(input));