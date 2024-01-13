// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
// সিম্পল জাভাস্ক্রিপ্ট অবজেক্ট
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
};

const { name, age, city } = person;
console.log(name, age, city);

// array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const numbers = [1, 2, 3, 4, 5];

// destructuring ব্যবহার করে থার্ড পজিশনের উপাদান কে 'three' নামক ভেরিয়েবলে ডিক্লেয়ার করা
const [, , three] = numbers;
console.log(three);

/* সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য Destructuring ইউজ করো। Array এর Destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর 
উপাদান কে Destructuring করে 'Balance' নামক একটা ভেরিয়েবল এ রাখবে।*/

const myObject = {
    name: 'rabiul',
    friend: {
        name: 'rafee',
        age: 24,
    },
    balance: [2000, 500, 1000],
    age: 23,
    bestFriend: 2,
};
const { balance } = myObject;
console.log(balance);
const [, , teaching] = balance
console.log(teaching);