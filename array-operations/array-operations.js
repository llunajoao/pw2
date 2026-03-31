import { sum, sumOdds, product } from "./array-functions.js";

const array = [1, 2, 3];
console.log(`Correto: 6`);
console.log(`teste: ${sum(array)}`);

const array2 = [2, 2, 2];
console.log(`Correto: 6`);
console.log(`teste: ${sum(array2)}`);

const array3 = [1, 2, 3, 4, 5, 6];
console.log(`Correto: 21`);
console.log(`teste: ${sum(array3)}`);

const arrayodds = [1, 2, 3];
console.log(`Correto: 4`);
console.log(`teste: ${sumOdds(arrayodds)}`);

const arrayodds2 = [2, 2, 2];
console.log(`Correto: 0`);
console.log(`teste: ${sumOdds(arrayodds2)}`);

const arrayodds3 = [1, 2, 3, 4, 5, 6];
console.log(`Correto: 9`);
console.log(`teste: ${sumOdds(arrayodds3)}`);

const arrayproduct = [1, 2, 3];
console.log(`Correto: 6`);
console.log(`teste: ${product(arrayproduct)}`);

const arrayproduct2 = [2, 2, 2];
console.log(`Correto: 8`);
console.log(`teste: ${product(arrayproduct2)}`);

const arrayproduct3 = [1, 2, 3, 4, 5, 6];
console.log(`Correto: 720`);
console.log(`teste: ${product(arrayproduct3)}`);

