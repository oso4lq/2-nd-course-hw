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
const comparator = (a, b) => {
    if ((a - b) < 0) {
        return a;
    } else {
        return b;
    }
}

let a = prompt('Enter the 1st number');
let b = prompt('Enter the 2nd number');

console.log(comparator(a, b));

//  2
const oddEven = () => {
    let number = Number(prompt('Enter a number'));
    if (isNaN(number) === true) {
        alert('This value is not a number');
    } else if ((number % 2) === 1) {
        alert('This number is odd');
    } else {
        alert('This number is even');
    };
}

oddEven();

//  3.1
const square31 = () => {
    let c = prompt('Enter a number');
    console.log(c**2);
};
square31();

// 3.2

const square32 = () => {
    let d = prompt('Enter a number');
    return d ** 2;
};
console.log(square32());

//  4
const checkAge = () => {
    let age = prompt('Enter your age');
    if (age < 0) {
        alert('Incorrect value');
    } else if (age >= 0 && age <= 12) {
        alert('Hi, mate!');
    } else {
        alert('Welcome!');
    };
};
checkAge();

//  5
const checkIsTwoNaNs = (params) => {
    let e = Number(prompt('Enter the 1st number'));
    let f = Number(prompt('Enter the 2nd number'));

    if (isNaN(e) === true || isNaN(f) === true) {
        alert('One or both values are NaN');
    } else {
            return e * f;
        };
};
console.log(checkIsTwoNaNs());

//  6
const cube = () => {
    let g = Number(prompt('Enter a number'));
    if (isNaN(g) === true) {
        alert('This value is not a number');
    } else {
            console.log(g ** 3);
        };
};
cube();

//  7
function getArea() {
    return Math.PI * this.radius ** 2;
};
function getPerimeter() {
    return Math.PI * this.radius * 2;
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