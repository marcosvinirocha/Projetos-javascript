const primeiro = [1, 2, 3, 4];
const segundo = [5, 6, 7, 8];

// const junto = primeiro.concat(segundo);

// const dividir = junto.slice(1, 3);

//spread

const combinado = [...primeiro, ...segundo];
console.log(combinado);

const cloned = [...combinado];
console.log('Clonado:',cloned);

