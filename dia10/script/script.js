// Objeto
// JSON JavaScript Object Notation
let pokemon = {
    // Atributos del objeto
    nombre: "Pikachu",
    tipo: "Eléctrico",
    imagen: "https://s3.amazonaws.com/kandipatternspatterns/characters/1509581877_Pikachu_Sprite.png",
    altura: 55,
    // Método
    saludo: function () { alert("Hola, soy pikachu") }
}

// DOM => Document Object Model
document.getElementById("pokeImage").src = pokemon.imagen;
document.getElementById("pokeName").innerHTML = pokemon.nombre;
document.getElementById("pokeType").innerHTML = pokemon.tipo;
document.getElementById("pokeHeight").innerHTML = pokemon.altura + "cm";

function success() {
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

