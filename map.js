// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const oddArray = [1, 3, 5, 7, 9]
const even = [];

for (let i = 0; i < oddArray.length; i++) {

    even.push(oddArray[i] + 1);
}

console.log(even);

const oddArray2 = [1, 3, 5, 7, 9];

const even2 = oddArray.map(x => x + 1);

console.log(even2);


// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const array2 = [5, 2, 4, 6, 7, 9]

const result = array2.map(x => x * 5);
console.log(result);


// অনেকগুলা সংখ্যার একটা Array হবে। তারপর তোমার কাজ হবে Array এর উপরে Map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা Array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const myArray = [7, 14, 21, 28, 35, 42, 49]
const myArrayResult = myArray.map(x => x / 7);
console.log(myArrayResult);