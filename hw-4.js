/*
while (true) {
    const msg = prompt('enter text');

    if (msg === 'continue') {
        continue;
    };
    console.log(msg);
    if (msg === 'break') {
        break;
    };   
};
*/

//  1
for (let a = 0; a < 2; a++) {
    console.log('Hello');
};

//  2
for (let b = 1; b < 6; b++) {
    console.log(b);
};

//  3
for (let c = 7; c < 23; c++) {
    console.log(c);
};

//  4
let obj = {
    Kolya: 200, 
    Vasya: 300, 
    Petya: 400
};

for (key in obj) {
    if (obj[key]) {
        console.log(`${key} has a salary of ${obj[key]} dollars`);
    };
};

//  5
let n = 1000;
let num = 0;
while (n > 50) {
    n = n / 2;
    num++;
    //console.log(n);
};
console.log(num);

//  6
let firstFridayDate = Number(prompt('First Friday date is...'));

if (isNaN(firstFridayDate) === true) {
    alert('This is not a number.');
} else if (firstFridayDate <= 0) {
    alert('The date can not be a negative number or a zero.');
} else if (firstFridayDate > 7) {
    alert('The first Friday of the month cannot have a date greater than 7.');
} else {

for (; firstFridayDate < 31; firstFridayDate = firstFridayDate + 7) {
    
    if (firstFridayDate === 1) {
        console.log(`Today is Friday, ${firstFridayDate}st. You need to prepare a report.`);
        continue;
    }
    if (firstFridayDate === 2) {
        console.log(`Today is Friday, ${firstFridayDate}nd. You need to prepare a report.`);
        continue;
    }
    if (firstFridayDate === 3) {
        console.log(`Today is Friday, ${firstFridayDate}rd. You need to prepare a report.`);
        continue;
    }
    console.log(`Today is Friday, ${firstFridayDate}th. You need to prepare a report.`);
};
};