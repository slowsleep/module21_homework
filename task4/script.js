let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randInt = Math.floor(Math.random() * 100) + 1;
        if (randInt % 2 == 0) {
            resolve("Завершено успешно. Сгенерированное число — " + randInt);
        } else {
            reject("Завершено с ошибкой. Сгенерированное число — " + randInt);
        }
    }, 3000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
