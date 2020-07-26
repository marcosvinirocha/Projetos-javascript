//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => Fizzbuzz
// Não Divisível po 3 e 5 => retorna o valor;
//Não é um numero => retorna mensagem 'não é um número'

const result = fizzbuzz(15);
console.log(result);

function fizzbuzz(entries) {
  if (typeof entries !== "number") return "Não è um numero";
  if (entries % 3 === 0 && entries % 5 === 0) return "FizzBuzz";
  if (entries % 3 === 0) return "Fizz";
  if (entries % 5 === 0) return "Buzz";
  return entries;
}
