//opção 1

let faixas = [
  { tooltip: "até R$ 600,00", min: 0, max: 600 },
  { tooltip: "de R$600 até R$ 1000,00", min: 700, max: 1000 },
  { tooltip: "de R$ 1000 até R$ 20,000,00", min: 1000, max: 20000 },
];

//opção 2

function criarFaixaPreco(tooltip, min, max) {
  return {
    tooltip,
    min,
    max,
  };
}

let faixas2 = [
  criarFaixaPreco("a", 100, 200),
  criarFaixaPreco("b", 700, 2000),
  criarFaixaPreco("c", 2200, 99999),
];


// opção 3

function FaixaDePreco(tooltip, min, max) {
    this.tooltip = tooltip;
    this.min = min;
    this.max = max;
}

let faixa3 = [
  new FaixaDePreco("d", 10, 20),
  new FaixaDePreco("e", 30, 70),
  new FaixaDePreco("f", 90, 200),
];

console.log(faixas);
console.log(faixas2);
console.log(faixa3);
