// criar função para mostrar os números primos

// primos e compostos.

function exibirNumerosPrimos(limit) {
  for (let numero = 2; numero <= limit; numero++) {
    if (numeroPrimo(numero)) console.log(numero);
  }
}

function numeroPrimo(numero) {
  let ehPrimo = true;

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}

exibirNumerosPrimos(15);
