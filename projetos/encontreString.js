
const filme = {
    title: 'Vingadores',
    year: 2019,
    director: 'director',
    personagem: 'Thor',
}

exibirProps(filme);

function exibirProps(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop]);
}

// parei no projeto multiplos de 3 e 5