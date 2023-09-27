/*
//  1
console.log('Task 1');
//
let str1 = 'js';
str1 = str1.toUpperCase();
console.log(str1);


//  2
console.log('Task 2');
//
const searchStart = (arr2, search) => {
    let arrNew = [];
    arr2.forEach(element => {
        element = element.toLowerCase();
        search = search.toLowerCase();
        if (element.toLowerCase().startsWith(search.toLowerCase())) {
            arrNew.push(element);
        }
    });
    return arrNew;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'Ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


//  3
console.log('Task 3');
//
let num3 = 32.58884;

console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));


//  4
console.log('Task 4');
//
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(`Mininum number is`, Math.min(...arr4));
console.log(`Maximum number is`, Math.max(...arr4));


//  5
console.log('Task 5');
//
const randomiser = () => {
    let num = Math.random() * 10;
    while (num < 1) {
        num = Math.random() * 10;
    }
    num = Math.round(num);
    return num;
}
console.log(randomiser());


//  6
console.log('Task 6');
//
const getRandomArrNumbers = (userNum) => {

    let arrRandom = [];

    const randomiserLim = (min, max) => {
        let randomNum = Math.round(min + Math.random() * (max - min));
        return randomNum;
    }

    for (let index = 0; arrRandom.length < Math.floor(userNum / 2); index++) {
        arrRandom.push(randomiserLim(0, userNum));
    }
    return arrRandom;
}

console.log(getRandomArrNumbers(6));


//  7
console.log('Task 7');
//
const randomiserLimited = (a, b) => {
    let randomNum6 = Math.random() * 10;
    while (randomNum6 != undefined) {
        if (a <= randomNum6 && randomNum6 <= b) {
            randomNum6 = Math.round(randomNum6);
            return randomNum6;
        } else {randomNum6 = Math.random() * 10;
        }
    }
}
console.log(randomiserLimited(2, 8));


//  8
console.log('Task 8');
//
let currentDate8 = new Date();
console.log(currentDate8);


//  9
console.log('Task 9');
//
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Date after 73 days will be ${currentDate}`);


//  10
console.log('Task 10');
//
let myDate = new Date();

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let fullDate = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + '— это ' + days[myDate.getDay()];
//let fullTime = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

let hours = myDate.getHours(); 
let minutes = myDate.getMinutes();
let seconds = myDate.getSeconds();

if (hours < 10) {
	hours = "0" + minutes;
}
if (minutes < 10) {
	minutes = "0" + minutes;
}
if (seconds < 10) {
	seconds = "0" + seconds;
}

console.log(`Дата: ${fullDate}`);
console.log(`Время: ${hours}:${minutes}:${seconds}`);
*/
