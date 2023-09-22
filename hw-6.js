
//  1
console.log('Task 1');
//
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 10) break;
    console.log(arr1[i]);
}


//  2
console.log('Task 2');
//
const arr2 = [1, 5, 4, 10, 0, 3];
let needIndex = arr2.indexOf(4);
console.log(needIndex);


//  3
console.log('Task 3');
//
let arr3 = [1, 3, 5, 10, 20];
arr3 = arr3.join(' ');
console.log(arr3);


//  4
console.log('Task 4');
//
let arr4 = [];
let arrItem = [];
for (let index = 0; index < 3; index++) {
    arrItem.push(1);
};
for (let index = 0; index < 3; index++) {
    arr4.push(arrItem);
};
console.log(arr4);


//  5
console.log('Task 5');
//
let arr5 = [1, 1, 1];
for (let index = 0; index < 3; index++) {
    arr5.push(2);
};
console.log(arr5);


//  6
console.log('Task 6');
//
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
//console.log(arr6);
arr6.pop();
console.log(arr6);


//  7
console.log('Task 7');
//
const arr7 = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Enter a number'));
let count = 0;

let search = arr7.includes(userNumber);
console.log(search);

if (search == true) {
    console.log('Correct');
    alert('Correct');
} else {
    console.log('Incorrect');
    alert('Incorrect');
}


//  8
console.log('Task 8');
//
let string8 = 'abcdef';
let arrNew = [];

const arr8 = string8.split('');
//console.log(arr8);

for (let i = 0; i < arr8.length; i++) {
    arrNew.unshift(arr8[i]);
};
//console.log(arrNew);

console.log(arrNew.join(''));


//  9
console.log('Task 9');
//
let arr9 = [
    [1, 2, 3,],
    [4, 5, 6]
];
//console.log(arr9);

arr9 = arr9.join('');
//console.log(arr9);

arr9 = arr9.split('');
//console.log(arr9);

arr9.sort();
//console.log(arr9);

let comma = arr9.includes(',');
//console.log(comma);

for (let index = 0; comma === true && index <= arr9.length; index++) {
    arr9.shift();
    comma = arr9.includes(',');
}

console.log(arr9);


//  10
console.log('Task 10');
//
let arr10 = [1, 2, 3, 7, 6, 5, 4, 8, 9, 10];

let sum = 0;
for (let index = 0; index < arr10.length - 1; index++) {
    sum = arr10[index] + arr10[index + 1];
    console.log(sum);
}

// Или имелось в виду это? Или через reduce?
console.log('/\\ THIS OR THIS? \\/');
sum = arr1[0];
for (let index = 0; index < arr10.length - 1; index++) {
    sum = sum + arr10[index + 1];
    console.log(sum);
}


//  11
console.log('Task 11');
//
const inputNums = [2, 4, 5];

const squareFunc = (inputNums) => {
    let square = inputNums.map(el => el ** 2);
    return square;
}

console.log(squareFunc(inputNums));


//  12
console.log('Task 12');
//
const inputWords = ['Word', '', 'syllable', 'long sentence', 'letter'];
let lengthWords = [];

const getLengthWords = (inputWords) => {
    for (let index = 0; index < inputWords.length; index++) {
        lengthWords.push(inputWords[index].length);
    }
    return lengthWords;
}

console.log(getLengthWords(inputWords));


//  13
console.log('Task 13');
//
let arrayNegative = [];

function filterPositive(array) {
    array.forEach(element => {
        if (element < 0) {
            arrayNegative.push(element);
        }
    });
    
    return arrayNegative;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
// => [-1, -10]
arrayNegative = [];
console.log(filterPositive([-25, 25, 0, -1000, -2]));
// => [-25, -1000, -2]

