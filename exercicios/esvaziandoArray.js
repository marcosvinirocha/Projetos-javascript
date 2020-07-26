let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let outros = numeros;
//solução 1
// numeros = [];

//solução 2

numeros.length = 0;

console.log(outros);
console.log(numeros);

//solução 3

// numeros.splice(0, numeros.length);

// console.log(outros);
// console.log(numeros);

//solução 4
// while (numeros.length > 0) {
//     numeros.pop();
// }

// console.log(outros);
// console.log(numeros);
