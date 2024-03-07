


let numbers: Array<number | string> = [1,2,3];
numbers.push("hola");
console.log(numbers); 

let message:string = "hola"
 
function greeting(name: string, lang: number){

}
interface persona {
    name : string;
    age: number;
    email: string;
    adres?:{                       //con el ? quiere decir que es opcional.
        streetName : string,
        streetNumber: number,
    } ;      
}

//  si es Partial no es tan estricto puede cumplir algunas cosas de el de arriba pero no todas, si no tiene el Parcial debe de cumplir todas, 
let user: Partial <persona> ={
    name: "jose",
    age: 30,
    email: "jose@example.com"
}
console.log (user.adres?.streetName??"(not avaible");

