function normalFun1() {
    console.log("Ez func");
}
normalFun1();

() => {
    console.log("Невызываемая стрелочная функция");
}

(() => {
    console.log("Вызываемая стрелочная функция");
})()

function normalFun(a, b) {
    console.log("normalFun2:", a + b);
}
normalFun(1, 2);

((a, b) => {
    console.log("(a,b)=>:", a + b);
})(5, 6)

//Цепной вызов функций
const calculator = {
    value: 0,
    setValue(initValue) {
        this.value = initValue;
        return this;
    },
    add(number) {
        this.value += number;
        return this;
    },
    getResult() {
        return this.value
    }
}
let result = calculator.setValue(15).add(5).getResult();
console.log("calcResult: ", result);


//Строковые функции, Цепной вызов
document.getElementById("strEvent").addEventListener("click",
    () => {
        let inputStr = document.getElementById("strInput").value;
        console.log("strEvent called!");
        console.log(allCaps(inputStr));

        let pArray = document.getElementById("pDiv").getElementsByTagName("p");
        pArray[0].textContent = allCaps(inputStr);
        pArray[1].textContent = allLower(inputStr);
        pArray[2].textContent = reverseText(inputStr);
        console.log(pArray);

    })

function allCaps(str) {
    return str.toUpperCase();
}

function allLower(str) {
    return str.toLowerCase();
}

function reverseText(str) {
    return str.trim().split("").reverse().join("")
}

// Функция Callback, которые вызывают другие функции.
function task1(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task1 completed:", t);
            callback();
        },
        t
    )
}

function task2(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task2 completed:", t);
            callback();
        },
        t
    )
}
task1(() => {
    task2(() => {
        console.log("All tasks completed!")
    })
});
//Promises, Обещания
var promiseState1 = false;
var promiseState2 = false;

var promise1 = new Promise(
    function (resolve, reject) {
        if (promiseState1) {
            resolve("promise 1 successful!");
        } else {
            reject("promise 1 rejected!")
        }
    }
)

var promise2 = new Promise(
    function (resolve, reject) {
        if (promiseState2) {
            resolve("promise 2 successful!");
        } else {
            reject("promise 2 rejected!")
        }
    }
)


promise1.then(
    function (message) {
        console.log(message);
        return promise2;
    }
    ).then(
        function (message) {
            console.log(message);
            return console.log("All promises resolved!")
        }
).catch(
        function (error) {
            console.log("Some error!")
            //console.error(error);
        }
)

