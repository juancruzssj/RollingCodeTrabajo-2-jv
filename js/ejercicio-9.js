function imprimirNumeros() {
    for (let i = 1; i <= 500; i++) {
        let mensaje = `${i}`;

        if (i % 4 === 0) {
            mensaje += ' (Múltiplo de 4)';
        }

        if (i % 9 === 0) {
            mensaje += ' (Múltiplo de 9)';
        }

        console.log(mensaje);

        if (i % 5 === 0 && i !== 500) {
            console.log('————————————————————-');
        }
    }
}

imprimirNumeros();
