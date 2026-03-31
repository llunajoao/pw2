import {Exam} from './exam.js';

const weight = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};

const correctAnswer = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'};

const exam = new Exam(weight, correctAnswer);


//testes
console.log(exam.add({q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}));
console.log(exam.add({q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'})); 
console.log(exam.add({q1: 'c', q2: 'c', q3: 'c', q4: 'c', q5: 'c'})); 

console.log(`Média: ${exam.avg()}`);        
console.log(`Menor nota: ${exam.min()}`);  
console.log(`Maior nota: ${exam.max()}`);  
console.log(`Notas menores que 5: ${exam.lt(5).join(', ')}`);   

