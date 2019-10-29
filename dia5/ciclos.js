// Índice; Condición; Incremento 
//      i = 0  0 <= 10; i++
//      i = 1  1 <= 10; i++
//      i = 2  2 <= 10; i++
//      i = 3  3 <= 10; i++
//      i = 4  4 <= 10; i++
//      i = 5  5 <= 10; i++

// for(let i = 0; i <= 10; i++) {
//     if(i % 2 === 0) {
//         if(i !== 0) {
//             console.log(i);
//         }
//     }
// }

// Dividir entre si mismos
// Entre uno

// 0
// 1
// 2
// 3

// Ciclo for 1 al 100
// Múltiplo de 3 Fizz
// Múltiplo de 5 Buzz
// Múltiplo de 5 y 3 FizzBuzz
// número

for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log(i + " FizzBuzz");
        } else {
            console.log(i + " Fizz");
        }
    } else if(i % 5 === 0) {
        if (i % 3 === 0) {
            console.log(i + " FizzBuzz");
        } else {
            console.log(i + " Buzz");
        }
    } else {
        console.log(i);
    }
}



if () {

} else if() {

} else if () {

} else {

}



// Cine pedir edad
// Definir tarifa
// Menor a 5 años la función es gratis
// De 5 a 12 paga mitad de tarifa
// De 13 a 54 paga tarifa completa
// Mayor de 55 la la función es gratis

