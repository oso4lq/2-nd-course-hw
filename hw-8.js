/*  STUD
//  stud 1
const fibonacci = [1, 1, 2, 3, 5, 8];

const multipleByTwoFib = fibonacci.map(el => el * 2);
const plusTenFib = fibonacci.map(el => el + 10);
const onlyBigFib = fibonacci.filter(el => el > 3);

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

//  stud 2
function callbackWithArrayLength(arr, callback) {
    callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
});

//  stud 3
function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

//  stud 4
const timer = (deadline) => {
    if (isNaN(+deadline)) {
        console.log('incorrect value');
        return;
    }

    let time = deadline;
    const interval = setInterval(() => {
        time -= 1;
        console.log(time);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('end')
    }, deadline * 1000)
};

const deadline = prompt('time?');
timer(deadline);
*/

// HOMEWORK 7 \/
// readMe: tasks 3,4,5 need to be run individually by disabling others with /**/

//  1
console.log('Task 1');
//
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

const sortByAge = (a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    if (a.age == b.age) {
        return 0;
    }
}

console.log(people1.sort(sortByAge));

//  2
console.log('Task 2');
//
function isPositive(element) {
    if (element > 0) {
        return element;
    };
};
function isMale(element) {
    if (element.gender === 'male') {
        return element;
    }
}
function filter(arr, ruleFunction) {

    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i]) != undefined) {
            output.push(ruleFunction(arr[i]));
        } else {
            continue;
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));


//  3
console.log('Task 3');
//
let deadline = 1000 * 30;
const timer = (deadline) => {

    let newDate = new Date();
    const interval = setInterval(() => {
        newDate = Date();
        console.log(newDate);
    }, 1000 * 3);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 seconds ended');
    }, deadline);
};

timer(deadline);


//  4
console.log('Task 4');
//
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
};

delayForSecond(function () {
    console.log('Hello, Glebus!');
});


//  5
console.log('Task 5');
//

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('1 second passed');
        if (cb) { cb(); }

    }, 1000);
}

function sayHi(name) {
    console.log(`Hello, ${name}!`);
}

delayForSecond(function () {
    sayHi('Glebus');
});