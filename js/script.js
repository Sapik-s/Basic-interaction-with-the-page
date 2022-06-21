/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Одержимость",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд"
    ]
};
//Функция удаления рекламных баннеров
//-----------------------------------------------------
function deleteAdvFunc(){
    const deleteAdv = document.querySelectorAll('.promo__adv img');

    deleteAdv.forEach(element => {
        element.remove();
    });
}

//Функция замены жанра
//-----------------------------------------------------
function replaceGenreFunc() {
    const replaceGenre = document.getElementsByClassName('promo__genre');
    
    replaceGenre[0].innerHTML = 'ДРАМА';
}

//Функция замены заднего фона
//-----------------------------------------------------
function replaceBgFunc() {
    const replaceBg = document.getElementsByClassName('promo__bg');

    replaceBg[0].style.cssText = `background: url('../img/bg.jpg');`;
}

//Функция формирование списка фильмов
//-----------------------------------------------------
function creatingListMovies() {
    const getListMovies = document.querySelectorAll('.promo__interactive-item');

    getListMovies.forEach((element, i) => {
        element.innerHTML = movieDB.movies[i];
    });
}
movieDB.movies.sort();

//Запуск функций
//-----------------------------------------------------
deleteAdvFunc();
replaceGenreFunc();
replaceBgFunc();
creatingListMovies();
//-----------------------------------------------------