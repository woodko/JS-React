'use strict';


// Склоняем слова в зависимости от количества

function getTimeFromMinutes(allMinutes) {
    if (typeof(allMinutes) !== 'number' || allMinutes < 0 || !Number.isInteger(allMinutes)){
        return "Ошибка, проверьте данные";
    }

    let hour = Math.floor(allMinutes / 60);
    let minutes = allMinutes % 60;

    function hourStr(number, one, two, five) {
        number = Math.abs(number); // абсолютное значение числа
        number %= 100; // отцепляем последние 2 цифры числа и возвращаем в переменную
        if (number >= 5 && number <= 20) { // проверка на диапазон
            return five;
        }
        number %= 10; // отцепляем последнюю 1 цифру числа и возвращаем в переменную
        if (number == 1) { // проверяем на 1
            return one;
        }
        if (number >= 2 && number <= 4) { // все остальное
            return two;
        }
        return five;
    }

    let itog = hourStr(hour, 'час', 'часа', 'часов');

    return `Это ${hour} ${itog} и ${minutes} минут`;
}

getTimeFromMinutes(1260);
