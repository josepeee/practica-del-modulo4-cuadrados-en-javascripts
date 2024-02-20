function multiplicar() {
    let count = 2;
    return function () {
        count *= 2;
        console.log(count);
    }
}

let dos = multiplicar();