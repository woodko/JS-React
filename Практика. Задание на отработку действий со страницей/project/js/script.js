/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Хуй"
    ]
};

const promoBlocks = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const filmsList = document.querySelector('.promo__interactive-list');


//1.
promoBlocks.forEach(item => {
    item.remove();
});

//2.
genre.textContent = 'Драма';

//3.
bg.style.backgroundImage = "url('img/bg.jpg') center center/cover no-repeat";

//4.
filmsList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    filmsList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${movieDB.movies[i]}
    <div class="delete"></div>
</li>
    `;
});