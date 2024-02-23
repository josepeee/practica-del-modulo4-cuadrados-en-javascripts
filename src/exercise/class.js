


export class Movie{ 
    #title;
    #description;
    #year;
    #rating;

    constructor(title, description, year){
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
    
}

  

