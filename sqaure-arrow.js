// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const square = (arr) => {
    let sum = 0, avg = 0;
    for (num of arr) {
        sum += num * num;
        avg = sum / arr.length;
    }
    return avg;
}
const numbers = [2, 4, 6, 8];
const result = square(numbers);
console.log(result);