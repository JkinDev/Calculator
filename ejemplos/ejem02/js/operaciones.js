"use strict"

function resolverBase(num1, operador) {
    let resultado;
    switch (operador) {
        case "/2":
            resultado = convertirDecimalABinario(num1);
            break;
        case "/8":
            resultado = convertirDecimalAOctal(num1);
            break;
        case "/16":
            resultado = convertirDecimalAHexadecimal(num1);
            break;
    }
    return resultado;
}

function resolverDecimal(num2, operador) {
    let resultado;
    switch (operador) {
        case "/2":
            resultado = convertirBinarioADecimal(num2);
            break;
        case "/8":
            resultado = convertirOctalADecimal(num2);
            break;
        case "/16":
            resultado = convertirHexadecimalADecimal(num2);
            break;
    }
    console.log(resultado);
    return resultado;
}

