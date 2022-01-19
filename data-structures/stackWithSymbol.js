const _items = Symbol('stackItems');

class Stack {
    constructor() {
        this[_items] = [];
    }

    push(element) {
        this[_items].push(element);
    }

    pop() {
        return this[_items].pop();
    }

    peek() {
        return this[_items][this[_items].length - 1];
    }

    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    clear() {
        this[_items] = [];
    }

    toString() {
        return this[_items].toString();
    }

    print() {
        console.log(this[_items].toString);
    }
}

const stack = new Stack();
const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);

console.log(stack.isEmpty());
stack[objectSymbols[0]].push(5);
stack.push(8);
console.log(stack.size());
stack.print();
console.log(stack.toString());