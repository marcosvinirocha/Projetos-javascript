const celular = {
  marcaCelular: "ASUS",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  ligar() {
    console.log("Fazendo Ligação");
  },
};

const novoObjetos = Object.assign(
  {
    bateria: 5000,
  },
  celular
);
console.log(novoObjetos);

const objetos = { ...celular }; // operador spreead

console.log("Objeto 2", objetos);
