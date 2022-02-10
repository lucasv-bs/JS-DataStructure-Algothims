import {Stack} from '../data-structures/stack-array.js';

function decimalToBinary(decimalNumber) {
    const remainderStack = new Stack();
    let number = decimalNumber;
    let remainder;
    let binaryString = '';

    if (number === 0) {
        return '0';
    }

    while (number > 0) {
        remainder = Math.floor(number % 2);
        remainderStack.push(remainder);
        number = Math.floor(number / 2);
    }

    while (!remainderStack.isEmpty()) {
        binaryString += remainderStack.pop().toString();
    }

    return binaryString;
}

console.log( decimalToBinary(0) );
console.log( decimalToBinary(1) );
console.log( decimalToBinary(10) );
console.log( decimalToBinary(8) );
console.log( decimalToBinary(16) );
console.log( decimalToBinary(32) );