/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let inp = document.querySelector('.adding__input');
let btn = document.querySelector('button');


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


/// второе задание

btn.addEventListener('click', function (event) {
    console.log(inp.value);
    if (inp.value.length > 10) {
        movieDB.movies.push(inp.value.substring(0, 10) + '...');
    } else {
        movieDB.movies.push(inp.value);
    }

    const check = document.querySelector('input[type="checkbox"]');


    if (check.checked == true) {
        console.log('Добавляем любимый фильм');
    };


    filmsList.innerHTML += `
        <li class="promo__interactive-item">${movieDB.movies.length}. ${movieDB.movies[movieDB.movies.length - 1]}
        <div class="delete"></div>
    </li>
        `;

    event.preventDefault();
});

const delBtn = document.querySelectorAll('.delete');
let films = document.querySelectorAll('.promo__interactive-item');


for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener('click', () => {



    });

};