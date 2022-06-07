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

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    let addForm = document.querySelector('form.add'),
        inp = addForm.querySelector('.adding__input');


    const promoBlocks = document.querySelectorAll('.promo__adv img');
    const genre = document.querySelector('.promo__genre');
    const bg = document.querySelector('.promo__bg');
    const filmsList = document.querySelector('.promo__interactive-list');




    //1.
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        bg.style.backgroundImage = "url('img/bg.jpg') center center/cover no-repeat";

    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parrent) {
        parrent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parrent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parrent);
            });
        });
    }

    deleteAdv(promoBlocks);
    makeChanges();
    createMovieList(movieDB.movies, filmsList);


    /// второе задание

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let newFilm = inp.value,
            check = document.querySelector('input[type="checkbox"]');

        if (newFilm) {
            if (newFilm.length > 10) {
                newFilm = `${newFilm.substring(0, 10)}...`;
            }

            check = check.checked;

            if (check) {
                console.log('Добавляем любимый фильм');
            };

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, filmsList);
        }

        event.target.reset();
    });
});