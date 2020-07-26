//encontrado elementos de tipo referência;

const marcas = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
  { id: 3, nome: "c" },
];

// console.log(marcas.includes({ id: 1, nome: "a" }));

const marcasNew = marcas.find(function (marcas) {
    return marcas.nome === "a";

})

console.log(marcasNew);