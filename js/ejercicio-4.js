let numeros = [];

function solicitarNumeros() {
    let input = prompt("Por favor, ingresa un número (o pulsa Cancelar para finalizar):");
    if (input !== null) {
        let numero = parseFloat(input);

        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("¡Error! Debes ingresar un número válido.");
        }
        
        solicitarNumeros();
    } else {
        let suma = numeros.reduce((acc, curr) => acc + curr, 0);
        alert("La suma total de los números ingresados es: " + suma);
    }
}

solicitarNumeros();
