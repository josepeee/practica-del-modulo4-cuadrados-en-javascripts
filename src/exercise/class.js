

// se pone los # para que estos datos no sean manipulables desde otra parte del proyecto, (sean privados).
export class Movie{ 
    // para todas las peliculas con un rating alto de 8
    static #minHighRating = 8;
    
    #title;
    #description;
    #year;
    #rating;

    constructor(title, description, year, rating){
        this.#title = title;
        this.#description = description;
        this.#year = year;
        this.#rating= rating;
    
    }
    getMovieData(){
        return{
           title:this.#title,
           description:this.#description,
           year: this.#year,
           rating: this.#rating
        }
    }

    isHighRating(){
   return this.#rating >= Movie.#minHighRating;
    }
    
}

  

