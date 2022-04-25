'use strict';

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


//Task 29-1
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


//Task 29-2

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


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(5));