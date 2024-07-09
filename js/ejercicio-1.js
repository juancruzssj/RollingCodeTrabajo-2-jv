let input = prompt("Por favor, ingresa tu edad:");

let edad = parseInt(input);

if (!isNaN(edad)) {
    if (edad >= 18) {
        console.log("¡Ya puedes conducir!");
    } else {
        console.log("Todavía no puedes conducir, eres menor de edad.");
    }
} else {
    console.log("La edad ingresada no es válida. Por favor, ingresa un número válido.");
}
