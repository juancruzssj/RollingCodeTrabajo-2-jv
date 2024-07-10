let piramide = '';

for (let i = 1; i <= 30; i++) {
    let linea = '';
    for (let j = 0; j < i; j++) {
        linea += i;
    }
    piramide += linea + '\n';
}

console.log(piramide);

