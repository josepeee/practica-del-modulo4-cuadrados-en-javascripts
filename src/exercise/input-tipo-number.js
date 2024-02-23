import { Button } from "bootstrap";


console.clear();
 
const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
 
 
inputElem.addEventListener('keyup', ()=> {

  console.log('innn', inputElem.value)
  if (inputElem.value.length === 8) {       
    buttonElem.setAttribute('disabled',true);
  } else if (inputElem.value.length === 9) {
    buttonElem.removeAttribute('disabled');
  }
});

buttonElem.addEventListener("click",()=>{
    let number = inputElem.value
    const lastNumber = number.substring(number.length -2)
    console.log(lastNumber.padStart(7,'*'))
});
