const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
const a =prompt('Один из последних фильмов?',''),
      b =prompt('Его оценка' , ''),
      c =prompt('Один из последних фильмов?',''),
      d =prompt('');

personalMovieDB.movies[a] = b;  
personalMovieDB.movies[c] = d;  
console.log(personalMovieDB);