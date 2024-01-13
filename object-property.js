// একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )


const nestedObject = {
    name: 'Main Object',
    properties: {
        property1: [1, 2, 3],
        property2: {
            subProperty1: ['a', 'b', 'c'],
            subProperty2: {
                deepArray: [true, false, true]
            }
        },
        property3: [4, 5, 6]
    }
};

// ডিক্লেয়ার করা অবজেক্ট প্রিন্ট করা
console.log(nestedObject);



