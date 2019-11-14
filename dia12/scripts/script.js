// JavaScript Moderno

// Manera tradicional
// function suma(a, b) {
//     return a + b;
// }

// Arrow Functions

// Función en una sola línea
// const suma = (a, b) => a + b;

// Función en varias líneas
// const suma = (a, b) => {
//     let result = a + b;
//     return result
// }

// G + erardo
// 0 1 2 3 4 5 6
// g e r a r d o
// const capitalize = (string) => {
//     let newWord = string.charAt(0).toUpperCase() + string.slice(1);
//     return newWord;
// }

// Únicamente un parámetro
// const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

// let nombre = capitalize("gerardo");
// let operacion = suma(4, 5);
// console.log(operacion);
// console.log(nombre);

// const mayorEdad = new Promise((resolve, reject) => {
//     let edad = 20;    
//     if(edad >= 18) {
//         resolve("Es mayor de edad");
//     } else {
//         reject("Es menor de edad");
//     }
// });

// mayorEdad
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

const getRFC = (name, lastName1, lastName2, year, month, day) => {
    let rfc = lastName1[0] + lastName1[1];
    rfc = rfc + lastName2[0];
    rfc = rfc + name[0];
    year = year.toString();
    rfc = rfc + year[2] + year[3];
    month = month.toString();

    // Operadores ternarios
    month = month.length === 1 ? 0 + month : month;
    // if( month.length === 1 ) {
    //     month = 0 + month;
    // }
    rfc = rfc + month;
    day = day.toString();
    day = day.length === 1 ? 0 + day : day;
    // if( day.length === 1 ) {
    //     day = 0 + day;
    // }
    rfc = rfc + day;
    rfc = rfc.toUpperCase();
    return rfc;
}

let myRFC = getRFC("Gerardo", "Medina", "Romero", 1995, 7, 19);
console.log(myRFC);

let edad = 19;
let mayorEdad = edad >= 18 ? true : false;