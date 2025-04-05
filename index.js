// index.js

import { add, Person, fetchData, delayedMessage, createFruitMap } from './tools.js';

// Test Modularity (add function)
console.log("Add 3 + 4 =", add(3, 4));

// Test Class
const person = new Person("Chizalum", 25);
console.log(person.greet());

// Test Async function
fetchData().then(data => {
    console.log("Fetched Data:", data);
});

// Test Promise
delayedMessage().then(msg => {
    console.log(msg);
});

// Test Map
const fruitMap = createFruitMap();
for (const [key, value] of fruitMap.entries()) {
    console.log(`${key}: ${value}`);
}