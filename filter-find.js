// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const numbers = [33, 50, 79, 78, 90, 101, 30];

const result = numbers.filter(x => x % 10 === 0);
const result2 = numbers.find(x => x % 10 === 0);

console.log(result);
console.log(result2);

// অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const array2 = [5, 20, 40, 61, 71, 91]

const result3 = array2.filter(x => x % 5 == 0);
console.log(result3);

// একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const products = [
    { id: 1, name: 'Product 1', price: 3000 },
    { id: 2, name: 'Product 2', price: 5000 },
    { id: 3, name: 'Product 3', price: 7000 },
];
const targetProduct = products.find(product => product.price === 5000);
console.log(targetProduct);