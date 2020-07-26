//? for
// for (let i = 5; i >= 1; i--) {
//     if (i % 2!==0) { //modulos
//         console.log(i);
//    }

// }

//? while

// let i = 5;

// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i--;
// }

//? Do while

// let i = 0;

// do {
//     console.log("digitando!", i);
//     i++;

// }while(i < 10);

//? for in

// const people = {
//   name: "Marcos",
//   old: 25,
// };
// for (let key in people) {
//   console.log(key, people["name"]);
// }

// const colors = ["vermelho", "Azul", "Verde"];

// for (let index in colors) {
//     console.log(index,colors[index]);
// }

//?for of

const colors = ["vermelho", "Azul", "Verde"];

for (let cor of colors) {
    console.log(cor);
}
