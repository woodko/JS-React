'use strict';

//////////////////////////////////////////////////////

// let len = 5;
// let result = '';
// let out = document.querySelector('.out');

// for (let i = 0; i <= len; i++) {
//     for (let j = 0; j < len - i; j++) {
//         result += '-';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }

//     result += '<br>';
// }

// out.innerHTML = result;


//Task 29-1  //////////////////////////////////////////////////////


// // Место для первой задачи
// function calculateVolumeAndArea(out) {
//     if(!isNaN(out) && out > 0){
//         let square = Math.pow(out, 2) * 6;
//         let volume = Math.pow(out, 3);
//         return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
//     }
//     else {
//         return "При вычиcлении произошла ошибка";
//     }
// }
// calculateVolumeAndArea(5));


// // Место для второй задачи
// function getCoupeNumber(out) {

//     if (isNaN(out) || out < 0 || !Number.isInteger(out)){
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//     else if (out > 36 || out == 0) {
//         return "Таких мест в вагоне не существует";
//     }
//     else {
//         let room = Math.ceil(out / 4);
//         return `=> ${room}`;
//     }
// }

// getCoupeNumber(4);


//Task 29-2  //////////////////////////////////////////////////////

// Место для первой задачи
// function getTimeFromMinutes(allMinutes) {
//     if (typeof(allMinutes) !== 'number' || allMinutes < 0 || !Number.isInteger(allMinutes)){
//         return "Ошибка, проверьте данные";
//     }

//     let hour = Math.floor(allMinutes / 60);
//     let minutes = allMinutes % 60;

//     function hourStr(number, one, two, five) {
//         number = Math.abs(number); // абсолютное значение числа
//         number %= 100; // отцепляем последние 2 цифры числа и возвращаем в переменную
//         if (number >= 5 && number <= 20) { // проверка на диапазон
//             return five;
//         }
//         number %= 10; // отцепляем последнюю 1 цифру числа и возвращаем в переменную
//         if (number == 1) { // проверяем на 1
//             return one;
//         }
//         if (number >= 2 && number <= 4) { // все остальное
//             return two;
//         }
//         return five;
//     }

//     let itog = hourStr(hour, 'час', 'часа', 'часов');

//     return `Это ${hour} ${itog} и ${minutes} минут`;
// }

// getTimeFromMinutes(1260);

// // Место для второй задачи
// function findMaxNumber(one, two, three, four) {
//     let arr = [one, two, three, four];
//     let tmp = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (typeof(arr[i]) == 'number'){
//             if (arr[i] > tmp) tmp = arr[i];
//         }
//         else {
//             return 0;
//         }

//     }
//     return tmp;

// }
// findMaxNumber(33, 18, 2, 7);

// Числа Фиббоначи  //////////////////////////////////////////////////////


// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5);


//работа с объектами  //////////////////////////////////////////////////////

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function () {
//         let langIn = '';
//         for (let key of skills.languages) {
//             langIn += key.toUpperCase() + ' ';
//         }
//         return `Мне ${age} лет и я владею языками: ${langIn}`;
//     }
// };

// const {
//     age,
//     skills
// } = personalPlanPeter;
// console.log(skills.languages);



// function showExperience(plan) {
//     return plan.skills.exp;
// }


// function showProgrammingLangs(plan) {
//     const langs = plan.skills.programmingLangs;
//     var langExp = '';
//     for (let key in langs) {
//         langExp += `Язык ${key} изучен на ${langs[key]}` + '\n';
//     }
//     return langExp;
// }


// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs());


// Работа с массивами  //////////////////////////////////////////////////////

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let out = '';
//     for (let key of arr) {
//         out += `${key} `;
//     }
//     if (arr == '') {
//         return "Семья пуста";
//     } else {
//         return `Семья состоит из: ${out}`;
//     }
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// console.log(showFamily(family));
// standardizeStrings(favoriteCities);

//Работа с массивами 2 //////////////////////////////////////////////////////

// const someString = 'This is some strange string';

// function reverse(str) {
//     const reverse = str.split('').reverse().join('');
//     return reverse;
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// let allBanks = [...baseCurrencies, ...additionalCurrencies];


// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     } else {
//         let out = '';
//         arr.forEach(curr => {
//             if (missingCurr != curr) {
//                 out += `${curr} \n`;
//             }
//         });
//         return `Доступные валюты:\n${out}`;
//     }
// }

// console.log(reverse(someString));
// console.log(availableCurr(allBanks, 'RUB'));

let a = 124;

a %= 100;

console.log(a);