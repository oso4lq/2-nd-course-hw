
//  1
let pswd = 'notqwerty';
let userpswd = prompt('Enter password');
if (userpswd === pswd) {
    alert('password is correct')
} else {
    alert('password in not correct')
};

//  2
let c = Number(prompt('Enter a number'));
if (c > 0 && c < 10) {
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
let monthNumber = Number(prompt('Month number?'));

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

//  7
let number = Number(prompt('Enter a number'));
if (isNaN(number) === true) {
    alert('this is not a number');
} else if (number == 1) {
    alert('this number is odd');
} else if ((number % 2) == 1) {
    alert('this number is odd');
} else {
    alert('this number is even');
};

//  8      NOT READY

let clientOS = 1;


switch (clientOS) {
    case 0:
        console.log('Install the iOS version of the application using the link');
    break;
    case 1:
        console.log('Install the Android version of the application using the link');
    break;
    default: console.log('Stay on our website');
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        console.log(object); "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}