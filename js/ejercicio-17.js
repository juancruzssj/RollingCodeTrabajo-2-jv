const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un texto: ', (texto) => {
    texto = texto.toLowerCase();

    let posicionVocal = -1;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            posicionVocal = i;
            break;
        }
    }
    if (posicionVocal !== -1) {
        const vocalEncontrada = texto[posicionVocal];
        console.log(`La vocal '${vocalEncontrada}' está en la posición ${posicionVocal}`);
    } else {
        console.log('No se encontraron vocales en el texto.');
    }

    readline.close();
});
