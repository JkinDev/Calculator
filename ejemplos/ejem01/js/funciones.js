"use strict"

function sumar(op1, op2) {
    return op1 + op2;
}

function restar(op1, op2) {
    return op1 - op2;
}

function multiplicar(op1, op2) {
    return op1 * op2;
}

function dividir(op1, op2) {
    return op1 / op2;
}

function parteEntera(valor) {
    return parseInt(valor);
}

function parteDecimal(valor) {
    return parseFloat("0." + valor.toString().split(".")[1]).toFixed(2);
}
