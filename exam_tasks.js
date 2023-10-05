//  TASK 1
console.log('Task 1');
//
const str_count = (string, symbol) => {
    let counter = 0;
    let array = string.split('');
    let index = array.indexOf(symbol);

    while (index != -1) {
        index = array.indexOf(symbol, index + 1);
        counter++;
    }

    return counter;
}
console.log(str_count('ololo', 'o'));


//  TASK 2
console.log('Task 2');
// map, reduce
function squareSum(numbers) {
    let newArr = numbers.map((num) => Math.pow(num, 2));
    let sum = newArr.reduce((a, b) => {
        return a + b;
    }, 0);
    return sum;
}
console.log(squareSum([1, 2, 2])); // 9


//  TASK 3
console.log('Task 3');
// math.sqrt, conditions
function nearestSq(n) {
    let sqrt = Math.sqrt(n);
    let low = Math.floor(sqrt) ** 2;
    let high = Math.ceil(sqrt) ** 2;
    if ((n - low) <= (high - n)) {
        return low;
    } else {
        return high;
    }
}
console.log(nearestSq(111)); // 121
console.log(nearestSq(144)); // 144
console.log(nearestSq(81));  // 81


//  TASK 4
console.log('Task 4');
// Split, reverse, join
function solution(str) {
    let array = str.split('');
    let newArray = array.reverse();
    return newArray.join('');
}
console.log(solution('abirvalg'));


//  TASK 5
console.log('Task 5');
// Split, length, map
function addLength(str) {
    const array = str.split(' ');
    const output = array.map((word) => `${word} ${word.length}`);
    return output;
}
console.log(addLength("apple ban"));
console.log(addLength("you will win"));


//  TASK 6
console.log('Task 6');
//
function mango(quantity, price) {
    let sum = 0;
    let offer = Math.floor(quantity / 3);
    let rest = quantity % 3;
    if (offer > 0) {
        sum = offer * 2 * price + rest * price;
    } else {
        sum = quantity * price;
    }
    return sum;
}
console.log(mango(9, 5));


//  TASK 7
console.log('Task 7');
//
function litres(time) {
    return amount = Math.floor(time * 0.5);
}
console.log(litres(6.7));


//  TASK 8
console.log('Task 8');
//
function invert(array) {
    let newArray = [];
    array.forEach(num => {
        if (num > 0) {
            num = -Math.abs(num);
            newArray.push(num);
        } else {
            num = Math.abs(num);
            newArray.push(num);
        }
    });
    return newArray;
}
console.log(invert([1, 2, 3, 4, 5])); // == [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); // == [-1, 2, -3, 4, -5]
console.log(invert([])); // == []


//  TASK 9
console.log('Task 9');
//
function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}
console.log(powersOfTwo(2));


//  TASK 10
console.log('Task 10');
//
function grow(x) {
    let mult = x.reduce((a, b) => {
        return a * b;
    }, 1);
    return mult;
}
console.log(grow([1, 2, 3, 4])); // 24