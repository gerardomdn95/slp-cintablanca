function game(p1, p2) {
    if (typeof (p1 ) === "string") {
        p1  = p1 .toLocaleLowerCase();
        if (p1  === "piedra" || p1  === "papel" || p1  === "tijeras") {
            if (typeof (p1 ) === "string") {
                p2  = p2 .toLocaleLowerCase();
                if (p2  === "piedra" || p2  === "papel" || p2  === "tijeras") {
                    // Empates
                    if (p1  === "papel" && p2  === "papel") {
                        return "Empate";
                    } else if (p1  === "piedra" && p2  === "piedra") {
                        return "Empate";
                    } else if (p1  === "tijeras" && p2  === "tijeras") {
                        return "Empate";
                        // p1 
                    } else if (p1  === "papel" && p2  === "piedra") {
                        return "Gana p1 ";
                    } else if (p1  === "piedra" && p2  === "tijeras") {
                        return "Gana p1 ";
                    } else if (p1  === "tijeras" && p2  === "papel") {
                        return "Gana p1 ";
                        // p2 
                    } else if (p2  === "papel" && p1  === "piedra") {
                        return "Gana p2 ";
                    } else if (p2  === "piedra" && p1  === "tijeras") {
                        return "Gana p2 ";
                    } else if (p2  === "tijeras" && p1  === "papel") {
                        return "Gana p2 ";
                    }
                } else {
                    return "p2  opción inválida";
                }
            } else {
                return "p2  tipo de dato inválido";
            }
        } else {
            return "p1  opción inválida";
        }
    } else {
        return "p1  tipo de dato inválido";
    }
}

function test() {
    let input = document.getElementById("input");
    let prueba = document.getElementById("prueba");
    prueba.innerHTML = input.value;
    prueba.classList.add("is-red");
}
