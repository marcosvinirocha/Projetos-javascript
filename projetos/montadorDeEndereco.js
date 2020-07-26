let endereco = {
    rua: 'Av Cabanadas ,406, Marta Helena',
    cidade: 'Uberlandia, MG',
    CEP: '402296-290',
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);


