const mouse={
    cor: 'red',
    marca:'razer',
}

mouse.velociadade = 5000;
mouse.trocarDPi = function () {
    console.log('trocando DPI')
}
delete mouse.velociadade;
console.log(mouse);