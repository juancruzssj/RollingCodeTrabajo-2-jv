function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    return numeroAleatorio;
}

let numero = generarNumeroAleatorio();
console.log(`Número aleatorio generado: ${numero}`);
