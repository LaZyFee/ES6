// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result


const twoArray = (arr1, arr2) => {
    const array = [...arr1, ...arr2];
    const max = Math.max(...array);
    return max;
}

const array1 = [3, 8, 12];
const array2 = [6, 15, 9];

const result = twoArray(array1, array2);
console.log(result);
