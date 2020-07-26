function criarCelular(marca, tamTela, tamBateria) {
  return {
    marcaCelular: marca,
    tamanhoTela: tamTela,
    capacidadeBateria: tamBateria,
      ligar() {
        console.log('Fazendo Ligação ....')
    },
  };
}



const celular1 = criarCelular('zenfone', 5.5, 5000);

console.log(celular1);