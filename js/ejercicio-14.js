const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese una cadena de texto: ', (texto) => {
    let textoConGuiones = "";

    for (let i = 0; i < texto.length; i++) {
        textoConGuiones += texto[i];

        if (i !== texto.length - 1 && texto[i] !== ' ') {
            textoConGuiones += '-';
        }
    }
    console.log(`El texto con guiones es: ${textoConGuiones}`);

    readline.close();
});
