import {Queue} from './data-structures/queue.js';

const queue = new Queue;

console.log( queue.size() );
console.log( queue.isEmpty() );

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(14);
queue.enqueue(21);

console.log( queue.toString() );
console.log( queue.size() );

queue.dequeue();
queue.dequeue();

console.log( queue.toString() );
console.log( queue.size() );