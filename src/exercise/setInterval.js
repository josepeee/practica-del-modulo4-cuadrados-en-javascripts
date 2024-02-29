
let count= 0;

function incremento (){
    console.log('han pasado ${++count} segundos');
    if(count >= 5 )clearInterval(myinterval);
} 

const myinterval = setInterval(incremento, 1000);