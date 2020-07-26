exibirTipo(5);

function exibirTipo(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log("PAR",i);
        else
            console.log("IMPAR",i);
    }
}
