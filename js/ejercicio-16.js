const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese una cadena de texto: ', (texto) => {
    const textoAlReves = texto.split('').reverse().join('');

    console.log(`El texto al revés es: ${textoAlReves}`);

    readline.close();
});
