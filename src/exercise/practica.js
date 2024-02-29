import { Button } from "bootstrap";

console.log ();

const inputElemt= document.querySelector('input')
const ButtonElem = document.querySelector('button');

let lastKeyup = -1;
inputElemt.addEventListener('keyup',()=>{
    if(lastKeyup !== undefined){
        myInterval = setInterval(handler,1000);
        console.log(myInterval);
    }
lastKeyup = Number(new Date());
   
});
function handler(){
    const now = Number(new Date());

    if(now - lastKeyup >=800){
        lastKeyup = undefined;
        clearInterval(myInterval);
        console.log("value", inputElemt.value);
    }
}

const myInterval = setInterval(handler,1000);