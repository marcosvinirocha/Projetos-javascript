
// Camel Case
function criarCelular(marca, tamTela, tamBateria) {
  return {
    marcaCelular: marca,
    tamanhoTela: tamTela,
    capacidadeBateria: tamBateria,
    ligar() {
      console.log("Fazendo Ligação ....");
    },
  };
}

//Pascal Case
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  (this.marcaCelular = marcaCelular),
    (this.tamanhoTela = tamanhoTela),
    (this.capacidadeBateria = capacidadeBateria),
    (this.ligar = function () {
      console.log("Fazendo Ligação ....");
    });
}

const celular = new Celular("ASUS", 5.5, 5000);

console.log(celular);
