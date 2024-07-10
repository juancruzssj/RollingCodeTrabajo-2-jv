const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un texto: ', (texto) => {
    const regex = /[aeiou]/gi;
    const vocalesEncontradas = texto.match(regex);

    const numeroVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;

    console.log(`El número de vocales en el texto es: ${numeroVocales}`);

    readline.close();
});
