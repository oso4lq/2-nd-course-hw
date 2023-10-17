// TASK 3
console.log('Task 3.1');
//

let word = 'osetr';
let arrayWord = word.split('');
console.log(arrayWord);
// ['o', 's', 'e', 't', 'r']

console.log('================================');

//
console.log('Task 3.2');
//
let fish = 'sturgeon, sprout, salmon';
let toArrayFish = fish.split(', ', 2);
for (let item of toArrayFish) {
    console.log(item);
}
// sturgeon
// sprout
// salmon


// TASK 4
console.log('Task 4');
//
let arrayFish = ['sturgeon', 'sprout', 'salmon'];
console.log('Before splice()1: ' + arrayFish);
let newArrFish = arrayFish.splice(1, 0, 'carp')


console.log('After splice()1: ' + arrayFish);
console.log('splice()1: ' + newArrFish);

newArrFish = arrayFish.splice(1, 2);

console.log('After splice()2: ' + arrayFish);
console.log('splice()2: ' + newArrFish);

newArrFish = arrayFish.splice(0, 1, 'pike', 'eel');

console.log('After splice()3: ' + arrayFish);
console.log('splice()3: ' + newArrFish);


// TASK 5
console.log('Task 5');
//
for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
}
