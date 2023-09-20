/*  stud1
let user = {
    name: 'Osetr',
    age: 12,
    city: 'Tirana',
    getInfo() {
        return `User ${user.name}, age ${user.age}, lives in ${user.city}.`;
    }
};
console.log(user.getInfo());
*/
/*  stud2
function getRectangleArea() {
    return this.width * this.height;
};
function getRectanglePerimeter() {
    return (this.width + this.height) * 2
}

let square1 = {
    width: 10,
    height: 10,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
};
let square2 = {
    width: 20,
    height: 20,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
};

console.log(square1.getRectangleArea());
console.log(square1.getRectanglePerimeter());
console.log(square2.getRectangleArea());
console.log(square2.getRectanglePerimeter());
*/


//  1
const comparatorLess = (a, b) => {
    if ((a - b) < 0) {
        return a;
    } else {
        return b;
    }
}

console.log(comparatorLess(8, 4));

//  2
const oddEven = (number) => {
    if (isNaN(number) === true) {
        console.log('This value is not a number');
    } else if ((number % 2) === 1) {
        console.log('This number is odd');
    } else {
        console.log('This number is even');
    };
}

oddEven(222);

//  3.1
const square31 = (c) => {
    console.log(c ** 2);
};
square31(12);

// 3.2

const square32 = (d) => {
    return d ** 2;
};
console.log(square32(14));

//  4
const checkAge = (age) => {
    if (isNaN(age) === true) {
        console.log('This value is not a number');
    } else if (age < 0) {
        console.log('Incorrect value');
    } else if (age >= 0 && age <= 12) {
        console.log('Hi, mate!');
    } else {
        console.log('Welcome!');
    };
};
checkAge(22);

//  5
const checkIsTwoNaNs = (e, f) => {
    if (isNaN(e) === true || isNaN(f) === true) {
        return 'One or both values are NaN';
    } else {
        return e * f;
    };
};
console.log(checkIsTwoNaNs(1, 'ssd'));

//  6
const cube = (g) => {
    if (isNaN(g) === true) {
        console.log('This value is not a number');
    } else {
        console.log(g ** 3);
    };
};
cube(12);

//  7
function getArea() {
    return Math.round(Math.PI * this.radius ** 2);
};
function getPerimeter() {
    return Math.round(Math.PI * this.radius * 2);
};

let circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
};
let circle2 = {
    radius: 20,
    getArea: getArea,
    getPerimeter: getPerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());