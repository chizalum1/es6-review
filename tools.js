// tools.js

// Modularity: Exporting function
export function add(a, b) {
    return a + b;
}

// Class
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Async/Await
export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

// Promise
export function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This message was delayed by 2 seconds.");
        }, 2000);
    });
}

// Map
export function createFruitMap() {
    const map = new Map();
    map.set('A', 'Apple');
    map.set('B', 'Banana');
    map.set('C', 'Cherry');
    return map;
}
