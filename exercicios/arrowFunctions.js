const marcas = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
  { id: 3, nome: "c" },
];

console.log(
  marcas.find(marcas => {
    return marcas.nome === "a";
  })
);
