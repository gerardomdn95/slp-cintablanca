// Cine pedir edad
// Definir tarifa
// Menor a 5 años la función es gratis
// De 5 a 12 paga mitad de tarifa
// De 13 a 54 paga tarifa completa
// Mayor de 55 la la función es gratis

// prompt => string
// let age = prompt("Ingresa tu edad");
// age = parseInt(age);
// console.log(age);

// // NaN (Not a Number)
// if (isNaN(age)) {
//     console.error("Error no puedo comparar una palabra");
// } else {
//     if (age > 0) {
//         if (age < 5) {
//             console.log("Función gratis");
//         } else if (age >= 5 && age <= 12) {
//             console.log("Paga mitad de tarifa");
//         } else if (age >= 13 && age <= 54) {
//             console.log("Paga tarifa completa");
//         } else {
//             console.log("Función gratis");
//         }
//     } else {
//         console.warn("Parece que ingresaste una edad negativa");
//     }
// }

//                  Función

//                 Algoritmo
// Origen     ===>  l    l   ===> Precios
// Destino          l____l

// true string
// false número
// isNaN();

// let valor = isNaN("Perro");

// Definición
// function viaje(origen, destino) {
//     console.log("Bienvenido a tu viaje de " + origen + " a " + destino);
// }

// Invocar función
// viaje("Querétaro", "Monterrey");
// viaje("CDMX", "SLP");
// viaje("Madrid", "Barcelona");

// function suma (x, y) {
//     let resultado = x + y;
//     return resultado;
// }

// let numeros = suma(4, 9)
// console.log(numeros);

function getPrice(age) {
    if (isNaN(age)) {
        return "Error no puedo comparar una palabra";
    } else {
        if (age > 0) {
            if (age < 5) {
                return "Función gratis";
            } else if (age >= 5 && age <= 12) {
                return "Paga mitad de tarifa";
            } else if (age >= 13 && age <= 54) {
                return "Paga tarifa completa";
            } else {
                return "Función gratis";
            }
        } else {
            return "Parece que ingresaste una edad negativa";
        }
    }
}

console.log(getPrice(4));
let result = getPrice(24);
console.log(result);



// // Js antiguo
// var variable;

// // JS moderno
// let modificar;
// const constante;