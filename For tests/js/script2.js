'use strict';

//////////////////////////////////////////////////////

// const shoppingMallData = {
//     shops: [{
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let val = 0;
//     let cost = 0;
//     for (let key in data.shops) {
//         for (let bey of data.shops) {
//             square += bey.width * bey.length;
//         }
//         console.log(square);
//         break;
//     }

//     val = square * data.height;
//     console.log(val);
//     cost = val * data.moneyPer1m3;
//     console.log(cost);

//     if (cost < data.budget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }

// }

// console.log(isBudgetEnough(shoppingMallData));

////////////////////////////////////////////////////////////

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {

    arr.sort();

    const groups = [
        [],
        [],
        [],
        'Оставшиеся студенты:-'
    ];

    arr.forEach(function (element, i) {
        if (i < 3) {
            groups[0].push(element);
        } else if (i < 6) {
            groups[1].push(element);
        } else if (i < 9) {
            groups[2].push(element);
        } else {
            let tmp = groups[3].slice(0, -1);
            tmp += ` ${element},`;
            groups[3] = tmp;
        }
    });

    // let tmp = groups[3].replace(/.$/, '');
    let tmp = groups[3].slice(0, -1);
    groups[3] = tmp;

    return groups;

}

console.log(sortStudentsByGroups(students));