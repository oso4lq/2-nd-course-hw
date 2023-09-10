//  1
let a = 10;
alert(a);
a = 20;
alert(a);

//  2
let firstIPhoneYear = 2007;
alert(firstIPhoneYear);

//  3
let javaScriptDeveloper = 'Brendan Eich';
alert(javaScriptDeveloper);

//  4
let x = 10;
let y = 2;
let result;
result = x + y;
alert(result);
result = x - y;
alert(result);
result = x * y;
alert(result);
result = x / y;
alert(result);

//  5
result = 2 ** 5;
alert(result);

//  6
a = 9;
let b = 2;
result = a % b;
alert(result);

//  7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//  8
let age = Number(prompt('How old are you?'));
alert(age);

//  9.0
let user = {
    name: 'Osetr',
    age: 12,
    isAdmin: true
};

//  9.1
user['city of residence'] = 'Tirana';
alert(user['city of residence']);

//  9.2
user.age = 16;

//  9.3 !!!!!!!!!!!!!!1
delete user['city of residence'];

//  9.4
let info = prompt('What information do you want to know about the user?');
alert(user[info]);

//  10
let username = prompt('Your name');
alert(`Hello, ${username}!`);