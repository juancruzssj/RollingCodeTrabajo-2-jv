function generarTabla(filas, columnas) {
    let totalCeldas = filas * columnas;
    let numeroInicial = totalCeldas;

    for (let i = 0; i < filas; i++) {
        let fila = "";
        for (let j = 0; j < columnas; j++) {
            let numeroActual = numeroInicial - (i * columnas + j);
            fila += numeroActual.toString().padStart(4, ' ') + " ";
        }
        console.log(fila);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el número de filas: ', (filas) => {
    readline.question('Ingrese el número de columnas: ', (columnas) => {
        generarTabla(parseInt(filas), parseInt(columnas));
        readline.close();
    });
});
