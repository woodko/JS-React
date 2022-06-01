// 'use strict';
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 5)); // 9
// pow(2, 3); // 8
// pow(2, 4); // 16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

// function getTotalProgressByItaration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByItaration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);


// Факториал итерации

function factorial(x) {
    let result = x;
    for (let i = 0; i < x; i++) {
        result = result * (x - 1);
        x -= 1;
    }
    return result;
}

console.log(factorial(1));

// Факториал рекурсия

function factorial(x) {
    if (x === 1 || x <= 0) {
        return 1;
    } else if (typeof (x) === "string" || Number.isInteger(x) != true) {
        return "Введите целое число!";
    } else {
        return x * factorial(x - 1)
    }
}

console.log(factorial(0));

const cars = {
    european: [{
            name: 'BMW',
            power: 500
        },
        {
            name: 'Mercedes',
            power: 560
        },
        {
            name: 'Volvo',
            power: 320
        }
    ],
    russian: {
        cars: [{
            name: 'LADA',
            power: 100
        }]
    }
};

function getTotalPower(data) {
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].power;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            let subDataArr = getTotalPower(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalPower(cars);

console.log(result[0] / result[1]);