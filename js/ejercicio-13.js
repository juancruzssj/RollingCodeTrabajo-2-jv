const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un texto: ', (texto) => {
    let textoEnMayusculas = texto.toUpperCase();

    console.log(`El texto en mayúsculas es: ${textoEnMayusculas}`);

    readline.close();
});
