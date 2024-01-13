// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const multiply = (a, b, c,) => {
    return a * b * c;
}
const result = multiply(2, 3, 6);
console.log(result);

// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const sum = (a, b = 5) => a + b;
const result2 = sum(10);
console.log(result2);


// তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
const sum2 = (a, b, c = 7) => a + b + c;
const result3 = sum2(5, 10);
console.log(result3);

// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const text = `I am a web develpoer.
I love to code. 
I love to eat biryani.
`
console.log(text);
// একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const oneParameter = (a) => a / 5;
const value = oneParameter(10);
console.log(value);

// তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const twoParameter = (a, b) => {
    newa = a + 2;
    newb = b + 2;
    mul = newa * newb;
    return mul
}
const value2 = twoParameter(5, 10)
console.log(value2);


// ইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const threeParameterArrow = (a, b, c) => a * b * c;
const result4 = threeParameterArrow(5, 3, 10);
console.log(result3);