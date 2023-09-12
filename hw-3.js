//  1
let pswd = 'notqwerty';
let userpswd = prompt('Enter password');
if (userpswd === pswd) {
    alert('password is correct')
} else {
    alert('password in not correct')
};

//  2
let c = prompt('Enter a number');
if (isNaN(c) === true) {
    alert('this is not a number')
} else if (c > 0 && c < 10) {
    alert('correct')
} else {
    alert('incorrect')
};

//  3
let d = 111;
let e = 2;
if (d > 100 || e > 100) {
    alert('correct')
} else {
    alert('incorrect')
};

//  4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a=Number(a);
b=Number(b);
alert(a + b);

//  5
let monthNumber = prompt('Month number?');
if (isNaN(monthNumber) === true) {
    alert('this is not a number');
} else {
switch(monthNumber) {

case 1:
alert('Winter');
break;
case 2:
alert('Winter');
break;
case 3:
alert('Spring');
break;
case 4:
alert('Spring');
break;
case 5:
alert('Spring');
break;
case 6:
alert('Summer');
break;
case 7:
alert('Summer');
break;
case 8:
alert('Summer');
break;
case 9:
alert('Autumn');
break;
case 10:
alert('Autumn');
break;
case 11:
alert('Autumn');
break;
case 12:
alert('Winter');
break;
default: alert(`Month number ${monthNumber} does not exist`)
break;
};
};

//  7
let number = prompt('Enter a number');
if (isNaN(number) === true) {
    alert('this is not a number');
} else if ((number % 2) === 1) {
    alert('this number is odd');
} else {
    alert('this number is even');
};

//  8

let clientOS;

let userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    /*{device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},

    {device: 'Windows', platform: /Windows NT/},
    {device: 'Macintosh', platform: /Macintosh/}*/
];

let platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Unknown platform!' + platform;
}

console.log(getPlatform());

if (getPlatform() === 'Android') {
    clientOS = 1;
} else if (getPlatform() === 'iPhone' || getPlatform() === 'iPad') {
    clientOS = 0;
} else if (getPlatform() === 'Windows') {
    clientOS = 2;
} else {
    clientOS = undefined;
};

switch (clientOS) {
    case 0:
        console.log('Install the iOS version of the application using the link');
    break;
    case 1:
        console.log('Install the Android version of the application using the link');
    break;
    case 2:
        console.log('ekekekkekek');
    break;
    default: console.log('Stay on our website');
}

//  9
