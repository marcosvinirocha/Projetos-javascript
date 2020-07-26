//* Operadores aritiméticos(matemáticos)

// let salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(salario ** salario);
//? + ,- , *, /, **

//! ++ e --
// let idade = 18;
// console.log(idade++);
// console.log(idade--)
// console.log(idade);

//* Operadores Atribuição
// let valorTecladoGamer = 100;
//? valorTecladoGamer = valorTecladoGamer + valorTecladoGamer

// valorTecladoGamer += valorTecladoGamer;

// console.log(valorTecladoGamer);

//* Operadores de comparação ou igualdade

//? igualdade estrita
// console.log(1 === 1);
// console.log("1" === 1);

//?igualdade solta
// console.log(1 == 1);
// console.log("1" == 1);
//?operador ternario

// let pontos = 1200;
// let tipos = pontos > 100 ? "premium" : "comum";
//console.log(tipos);
//* Operadores Lógicos

//?operador logico e(&&)
//?retorna true se os dois operandos forem verdadeiros.
// console.log(false&&true);
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;

// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

//? Operador logico ou(||)
//? retorna true se um dos operandos for verdadeiros

console.log(podeAplicar);

//? operador not(!)
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);

//* Operadores Bitwise
