//? criar função somar que retorna a
//? soma de todos os  mútiplos de 3 e 5

//? somando os multiplos

somar(10);
function somar(limit) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for (i = 0; i <= limit; i++) {
        if (i% 3 === 0) {
            multiplosDe3 += i;
        }
        if (i % 5 === 0) {
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}
