// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
const even = (arr) => {
    let result = [];

    for (const friend of arr) {
        if (friend.length % 2 === 0) {
            result.push(friend);
        }
    }
    return result;
};

const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];
const result = even(friends);
console.log(result);

