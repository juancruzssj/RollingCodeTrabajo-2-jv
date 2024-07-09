let cadenas = [];

function solicitarCadenas() {
    let cadena = prompt("Por favor, ingresa una cadena de texto (o pulsa Cancelar para finalizar):");
    if (cadena !== null) {
        cadenas.push(cadena); 
        solicitarCadenas(); 
    } else {
        let resultado = cadenas.join("-");
        alert("Las cadenas ingresadas son: " + resultado);
    }
}

solicitarCadenas();
