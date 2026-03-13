let valor1 = 1;
let valor2 = 1;
let operador = '/';

switch(operador){
    case '+':
        result = valor1 + valor2
        break;
    case '-':
        result = valor1 - valor2
        break;
    case '/':
        result = valor1 / valor2
        break;
    case '*':
        result = valor1 * valor2
        break;
    default:
        result = 'Invalid operator';
}

console.log(result)