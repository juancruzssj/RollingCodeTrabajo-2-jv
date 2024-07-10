function generarPiramideInversa(numero) {
    if (numero < 1 || numero > 50) {
        console.log("Por favor, ingresa un número entre 1 y 50.");
        return;
    }

    for (let i = numero; i >= 1; i--) {
        let linea = "";
        for (let j = i; j >= 1; j--) {
            linea += j;
        }
        console.log(linea);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número para la pirámide inversa (entre 1 y 50): ', (numero) => {
    generarPiramideInversa(parseInt(numero));
    readline.close();
});
