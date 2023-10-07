"use strict"

function convertirDecimalABinario(decimal) {
    return parseInt(decimal).toString(2);
}

function convertirDecimalAOctal(decimal) {
    return parseInt(decimal).toString(8);
}

function convertirDecimalAHexadecimal(decimal) {
    return parseInt(decimal).toString(16);
}

function convertirBinarioADecimal(binario) {
    return parseInt(binario, 2);
}

function convertirOctalADecimal(octal) {
    return parseInt(octal, 8);
}

function convertirHexadecimalADecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}
