import { max, min, range } from "./utils-functions.js";

const array = [1, 4, 2, 6, 10, 3];
console.log(`correto: 1`);
console.log(`teste: ${min(array)}`);

const array2 = [1, 4, -1, 6, 10, 3];
console.log(`correto: -1`);
console.log(`teste: ${min(array2)}`);

const array3 = [1, 4, 2, 6, 10, 3];
console.log(`correto: 10`);
console.log(`teste: ${max(array3)}`);


console.log(`correto: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)`);
console.log(`teste: ${range(10)}`);

console.log(`correto: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)`);
console.log(`teste: ${range(1, 11)}`);

console.log(`correto: (0, 5, 10, 15, 20, 25)`);
console.log(`teste: ${range(0, 30, 5)}`);



