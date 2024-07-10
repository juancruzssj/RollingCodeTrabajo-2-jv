function encontrarMayor(nombre1, edad1, nombre2, edad2, nombre3, edad3) {
    let mayorEdad = Math.max(edad1, edad2, edad3);
    let nombreMayor = "";

    if (mayorEdad === edad1) {
        nombreMayor = nombre1;
    } else if (mayorEdad === edad2) {
        nombreMayor = nombre2;
    } else {
        nombreMayor = nombre3;
    }

    console.log(`La persona de mayor edad es: ${nombreMayor} (${mayorEdad} años)`);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el nombre y edad de la primera persona (nombre edad): ', (input1) => {
    const [nombre1, edad1] = input1.split(" ");
    readline.question('Ingrese el nombre y edad de la segunda persona (nombre edad): ', (input2) => {
        const [nombre2, edad2] = input2.split(" ");
        readline.question('Ingrese el nombre y edad de la tercera persona (nombre edad): ', (input3) => {
            const [nombre3, edad3] = input3.split(" ");
            encontrarMayor(nombre1, parseInt(edad1), nombre2, parseInt(edad2), nombre3, parseInt(edad3));
            readline.close();
        });
    });
});
