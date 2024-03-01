

console. clear();

const apikey ="15d3ea6d0dc1d476efbca3eba2b9bbfb";
const langIso = "es-Es";
 const baseUrl= "https://api.themoviedb.org/3/";

 const movieListUrl = `${baseUrl}/movie/now_playing?langue=${langIso}&api_key=${apikey}`;

 fetch(movieListUrl)
 .then((response) => response.json())
 .then((response) => {
    response?.results?.forEach((movieData) => {
        const { id, title, overview}= movieData;
        console.log({id, title, overview });
    });
 })
 .catch((error) => console.error(error.message));