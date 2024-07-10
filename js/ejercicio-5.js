const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

function calcularLetraDNI() {
    let input = prompt("Por favor, ingresa tu número de DNI (o pulsa Cancelar para salir):");
    
    if (input !== null) {
        let dniNumero = parseInt(input);

        if (!isNaN(dniNumero) && dniNumero >= 0 && dniNumero <= 99999999) {
            let resto = dniNumero % 23;
            
            let letra = letrasDNI[resto];
            
            alert(`La letra de tu DNI ${dniNumero} es: ${letra}`);
            
            calcularLetraDNI();
        } else {
            alert("¡Error! Debes ingresar un número válido para el DNI.");
            calcularLetraDNI();
        }
    } else {
        alert("Has cancelado el cálculo de la letra del DNI.");
    }
}

calcularLetraDNI();
