// Objetos literales
// let pikachu = {
//     // Atributos del objeto
//     nombre: "Pikachu",
//     tipo: "Eléctrico",
//     imagen: "https://s3.amazonaws.com/kandipatternspatterns/characters/1509581877_Pikachu_Sprite.png",
//     altura: 55,
//     // Método
//     saludo: function () { alert("Hola, soy pikachu") }
// }

// Clases
class Pokemon {
    constructor(name, image, move1, move2, move3, move4) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.image = image;
        this.move1 = move1.charAt(0).toUpperCase() + move1.slice(1);
        this.move2 = move2.charAt(0).toUpperCase() + move2.slice(1);
        this.move3 = move3.charAt(0).toUpperCase() + move3.slice(1);
        this.move4 = move4.charAt(0).toUpperCase() + move4.slice(1);
    }    
}

// Arrow functions
let search = () => {
    let pokeInput = document.getElementById("pokeInput").value;
    console.log(pokeInput);

    // Acceder a endpoint
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokeInput)
        .then((data) => {
            // console.log(data.status);
            // 200 OK
            // 404 Not Found
            if(data.status === 200) {
                success();
                // JavaScript Object Notation
                data.json()
                    .then((pokeInfo) => {
                        // console.log(pokeInfo);
                        let pokemon = new Pokemon(
                            pokeInfo.name, 
                            pokeInfo.sprites.front_default, 
                            pokeInfo.moves[0].move.name,
                            pokeInfo.moves[1].move.name,
                            pokeInfo.moves[2].move.name,
                            pokeInfo.moves[3].move.name);
                        console.log(pokemon);
                        document.getElementById("pokeImage").src = pokemon.image;
                        document.getElementById("pokeName").innerHTML = pokemon.name;
                        document.getElementById("pokeMove1").innerHTML = pokemon.move1;
                        document.getElementById("pokeMove2").innerHTML = pokemon.move2;
                        document.getElementById("pokeMove3").innerHTML = pokemon.move3;
                        document.getElementById("pokeMove4").innerHTML = pokemon.move4;
                    })
                    .catch((err) => {
                        error();
                    })
            } else {
                error();
            }
        })
        // Servidor no respondió
        .catch((error) => {
            error();
        })
}

function onEnter(event) {
    if(event.key === "Enter") {
        search();
    }
}

let success = () => {
    Swal.fire(
        'Pokémon encontrado',
        '',
        'success'
    );
}

function error() {
    Swal.fire(
        'Pokémon no encontrado',
        '',
        'error'
    );
}