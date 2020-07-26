const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ultimo = numeros.pop();
console.log("removido:", ultimo);
console.log(numeros);

const primeiro = numeros.shift();
console.log("removido:", primeiro);
console.log(numeros);

const meio = numeros.splice(2, 1);
console.log("removido:", meio);
console.log(numeros);