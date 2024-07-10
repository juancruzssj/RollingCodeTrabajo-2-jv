function generarPiramide(numero) {
    if (numero < 1 || numero > 50) {
        console.log("Por favor, ingresa un número entre 1 y 50.");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número para la pirámide (entre 1 y 50): ', (numero) => {
    generarPiramide(parseInt(numero));
    readline.close();
});
