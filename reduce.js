/*You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.*/

const array1 = [1, 9, 17, 22];
let sum1 = 0;

for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}

console.log("Sum using for loop:", sum1);


const array2 = [1, 9, 17, 22];
const sum2 = array2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum using reduce():", sum2);


/*const people = [{ name: 'meena', age: 20 }, { name: 'rina', age: 15 }, { name: 'suchita', age: 22 }];
Challenging Follow above array of objects.So, you have 3 objects as
    array element.Can you find out the total sum from here ?
        20 + 15 + 22 = 57 .The output will be 57
What are you thinking ? Yeah! Do it with for loop.I know you can do it.
    But! Wait!! Wait!!! Do the same task using array.reduce() method.*/

const people = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'suchita', age: 22 }
];

let sum = 0;

for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
}

console.log("Sum using for loop:", sum);

const people2 = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'suchita', age: 22 }
];

const sum3 = people2.reduce((accumulator, person) => accumulator + person.age, 0);

console.log("Sum using reduce():", sum3);
