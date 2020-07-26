const numeros = [1, 2, 3];

numeros.unshift(0); // add o valor no inicio do array
numeros.splice(1, 0, "a");
numeros.push(5);

console.log(numeros);
