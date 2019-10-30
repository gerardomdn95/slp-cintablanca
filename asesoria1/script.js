// 0 - 1
let a = Math.random();
let b = Math.random();

// Dos dígitos
a = a * 100;
b = b * 100;

a = Math.round(a);
b = Math.round(b);

console.log(a);
console.log(b);

let result = a + b;
let user = prompt("¿Cuánto es " + a + " + " + b + "?");

if(result == user) {
    alert("Es correcto");
} else {
    alert("Es incorrecto");
}