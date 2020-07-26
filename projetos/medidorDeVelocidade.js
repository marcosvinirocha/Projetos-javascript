verificarVelocidade(150);

function verificarVelocidade(velocity) {
    if (velocity <= 70)
        console.log('Ok');
    else {
        const pontos = Math.floor((velocity - 70) / 5)
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('pontos', pontos);
    }
}