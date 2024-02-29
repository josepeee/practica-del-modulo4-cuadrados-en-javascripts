

const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve('This is a promise'), 1000);

});

async function test() {
    const result = await myPromise;
    console.log(result);
}

test();

const randomNumPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.round(Math.random() * 100);

        if (randomNum % 2 === 0) {
            resolve(randomNum);
        } else {
            reject(new Error('number is odd'));
        }
    }, 1000);
});

randomNumPromise.then(num => {
    console.log(num);
})

    .catch(error => {
        console.error(error.message);
    });
