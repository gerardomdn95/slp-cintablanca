// // Comparación simple
// // == !=
// if (2 == "2") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// // Comparación estricta
// // === !==
// // Se comparan tipos de variables
// if (2 === "2") {
//     console.log(true);
// } else {
//     console.log(false);
// }

let j1 = prompt("Ingresa opción J1");
if (typeof (j1) === "string") {
    j1 = j1.toLocaleLowerCase();
    if (j1 === "piedra" || j1 === "papel" || j1 === "tijeras") {
        let j2 = prompt("Ingresa opción J2");
        if (typeof (j1) === "string") {
            j2 = j2.toLocaleLowerCase();
            if (j2 === "piedra" || j2 === "papel" || j2 === "tijeras") {
                // Empates
                if (j1 === "papel" && j2 === "papel") {
                    console.log("Empate");
                } else if (j1 === "piedra" && j2 === "piedra") {
                    console.log("Empate");
                } else if (j1 === "tijeras" && j2 === "tijeras") {
                    console.log("Empate");
                    // J1
                } else if (j1 === "papel" && j2 === "piedra") {
                    console.log("Gana J1");
                } else if (j1 === "piedra" && j2 === "tijeras") {
                    console.log("Gana J1");
                } else if (j1 === "tijeras" && j2 === "papel") {
                    console.log("Gana J1");
                    // J2
                } else if (j2 === "papel" && j1 === "piedra") {
                    console.log("Gana J2");
                } else if (j2 === "piedra" && j1 === "tijeras") {
                    console.log("Gana J2");
                } else if (j2 === "tijeras" && j1 === "papel") {
                    console.log("Gana J2");
                }
            } else {
                console.log("J2 opción inválida");
            }
        } else {
            console.log("J2 tipo de dato inválido");
        }
    } else {
        console.log("J1 opción inválida");
    }
} else {
    console.log("J1 tipo de dato inválido");
}

// if (j1 == "papel") {
//     if (j2 == "papel") {

//     } else if (j2 == "tijeras") {

//     } else if (j2 == "piedra") {

//     }
// } else if (j1 == "tijeras") {
//     if (j2 == "papel") {

//     } else if (j2 == "tijeras") {

//     } else if (j2 == "piedra") {

//     }
// } else if (j1 == "piedra") {
//     if (j2 == "papel") {

//     } else if (j2 == "tijeras") {

//     } else if (j2 == "piedra") {

//     }
// }