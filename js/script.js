'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('.promo__interactive-list'),
    deleteAdv = document.querySelectorAll('.promo__adv img');
    const movieDB = {
        movies: [
            "Скотт Пилигрим против...",
            "Одержимость",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
        ]
    };
    //Функция удаления рекламных баннеров
    //-----------------------------------------------------
    function deleteAdvFunc(del){
        del.forEach(element => {
            element.remove();
        });
    }
    deleteAdvFunc(deleteAdv);

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
    function creatingListMovies(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                creatingListMovies(movieDB.movies, movieList);
            });
        });
    }

    function sortArr(arr) {
        arr.sort();    
    }

    //Запуск функций
    //-----------------------------------------------------
        replaceGenreFunc();
        replaceBgFunc();
        creatingListMovies(movieDB.movies, movieList);
    //-----------------------------------------------------
    
    
    const addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    deleteMovies = addForm.querySelector('.delete');
    
    addForm.addEventListener('submit', (e) => {

        e.preventDefault();

        let newFilm = addInput.value,
        favourite = checkbox.checked;

        if (newFilm !== "" && newFilm.length > 2) {
            movieDB.movies.push(newFilm);
            creatingListMovies(movieDB.movies, movieList);

            addInput.style.cssText = `border: 1px solid rgba(0, 0, 0, 0.19);`;
            addInput.placeholder = "Что уже посмотрено...?";

            e.target.reset();

            if (newFilm > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

        } else {
            addInput.style.cssText = `border-bottom: 2px solid red`;
            addInput.placeholder = "Мин кол-во символов 3";
        }

        if (favourite == true) {
            console.log(`Добавляем любимый фильм ${newFilm}`);
        }
    });
});