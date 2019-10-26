// Funciones de navegador
// alert("Funciona");
// console.log("Funciona");
// prompt("Escribe tu nombre");

// Tipos de datos
// String
let x = "Gerardo";

// Números
let num = 24;
let pi = 3.14159;
let neg = -3;

// Booleanos
let rain = true;
let snow = false;

// Operadores lógicos
let a = 15;
let b = 3;

let sum = a + b;
// Combinar strings y números (Concatenar)
//            1       2     3     4
console.log("Suma " + a + " + " + b);
console.log(sum);

let res = a - b;
console.log("Resta " + a + " - " + b);
console.log(res);

let mult = a * b;
console.log("Multiplicación " + a + " * " + b);
console.log(mult);

let div = a / b;
console.log("División " + a + " / " + b);
console.log(div);

let modulo = a % b;
console.log("Módulo " + a + " % " + b);
console.log(modulo);

let exp = a ** b;
console.log("Exponencial " + a + " ** " + b);
console.log(exp);

// Operadores de comparación
console.log("Operadores de comparación")
// false
console.log(10 > 10);

// true
console.log(10 == 10);

// true
console.log(10 >= 10);

// true
console.log(a > b);

// true
let comparacion = "perro" != "gato";
console.log(comparacion);

// Strings
let nombre = prompt("Escribe tu nombre");
console.log(nombre);

// Todo el string a mayúsculas
nombre = nombre.toUpperCase();
console.log(nombre);

// Todo el string a minúsculas
nombre = nombre.toLowerCase();
console.log(nombre);

// Reemplaza
nombre = nombre.replace("a", "4");
console.log(nombre);