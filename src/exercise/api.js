

console. clear();

const apikey ="15d3ea6d0dc1d476efbca3eba2b9bbfb";
const langIso = "es-Es";
 const baseUrl= "https://api.themoviedb.org/3/";


async function getNowPlayingData(page = 1){
    const movieListUrl = `${baseUrl}/movie/now_playing?langue=${langIso}&api_key=${apikey}&page=${page} `;
     return await fetch(movieListUrl) 
       .then((response) => response.json())
       .then((data) => data?.results);
}


 getNowPlayingData().then((movies) => {
    console.log(movies);
 });



//para el trabajo hacemos funciones que queremos hacer y despues las llamamos donde las queramos utilizar y asi podemos trabajar con mayor eficacia...