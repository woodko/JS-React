'use strict';

// let number = 5;
// debugger

// function logNumber() {
//     let number = 4;
//     debugger
//     console.log(number);
// }

// number = 6;

// logNumber();
// debugger

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);


const result = getSum(5, 6);
const getSum = function (a, b) {
    return a + b;
}

console.log(result);

console.log(typeof (1));



// Что вам следует проверить
// Лекция 11 Классификация типов данных в JavaScript
// Лекция 33 Массивы и псевдомассивы
// Лекция 28 Методы и свойства строк и чисел
// Лекция 32 Объекты, деструктуризация объектов (ES6)