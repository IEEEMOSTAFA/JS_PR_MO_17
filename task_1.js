let fruit = ['apple','mango','coconut','banana','malta'];
// console.log(fruit[2]);

let index = fruit.indexOf('coconut');
// Replace the item at the found index
fruit[index] = 'grape'; 
console.log(fruit);

// Extra:
let index1 = fruit.indexOf('banana');
fruit[index1] = 'pinapple';
console.log(fruit);