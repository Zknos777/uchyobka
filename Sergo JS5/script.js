let promise1 = new Promise(
    (resolve, reject) => {
        let state = Math.round(Math.random());
        console.log("State:", state);

        if (state) {
            resolve("Решённое обещание 1");
        } else {
            reject("Отклонённое обещание 1!");
        }

    })

console.log(promise1);

promise1.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
)


function walkTheDog() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Dog walker.") :
                        reject("Failed to walk Dog.");
                },
                t
            );
        }
    )
}


function cleanTheKitchen() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Kitchen cleaned!") :
                        reject("Failed to clean the kitchen.");
                },
                t
            );
        }
    )
}


function takeOutTheTrash() {
    return new Promise(
        (resolve, reject) => {
            let status = Math.round(Math.random());
            let t = Math.round(Math.random() * 5000);
            setTimeout(
                () => {
                    status ? resolve("Took out the trash") :
                        reject("Failed to take out the trash!");
                },
                t
            );
        }
    )
}








/*
walkTheDog().then(
    (result) => {
        console.log(result);
        return cleanTheKitchen();
    },
    (error) => {
        console.log(error);
        return cleanTheKitchen();
    }
).then(
    (result) => {
        console.log(result);
        return takeOutTheTrash();
    },
    (error) => {
        console.log(error);
        return takeOutTheTrash();
    }
).then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
)
*/



//v2
walkTheDog().then(
    (result) => {
        console.log(result);
        return cleanTheKitchen();
    }
).then(
    (result) => {
        console.log(result);
        return takeOutTheTrash();
    }
).then(
    (result) => {
        console.log(result);
    }
).catch(
    (error) =>{
        console.log(error)
    }
)

