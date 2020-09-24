const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a =prompt('Один из последних фильмов?',''),
          b =prompt('Его оценка' , '');

 if (a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b; 
    console.log('done');
 } else {
    console.log('error');
    i--;
 }
        
}

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Средне фильмов');
 } else if (personalMovieDB.count >= 10 ){
    console.log('Много фильмов');
 }
 else {
    console.log('Ошибка');
 }


console.log(personalMovieDB);



function showMyDB () {
  if(personalMovieDB.privat==false) {
     console.log(personalMovieDB)
  }
else{
   console.log('Error')
}
};


function writeYourGeneres(){
for(let i=1; i<4; i++){
  
   personalMovieDB.geners[i-1]  = prompt('Ваш любимый жанр под номером ' + i , '');
}
}

 writeYourGeneres();

showMyDB();
