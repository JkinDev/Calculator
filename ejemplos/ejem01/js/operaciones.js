"use strict"

function resolver(op1, operador, op2) {
    let resultado = "";
    switch (operador) {
        case "+":
            resultado = sumar(op1, op2);
            break;
        case "-":
            resultado = restar(op1, op2);
            break;
        case "*":
            resultado = multiplicar(op1, op2);
            break;
        case "/":
            resultado = dividir(op1, op2);
            break;
        case "_.":
            resultado = parteEntera(salida.innerHTML);
            break;
        case "._":
            resultado = parteDecimal(salida.innerHTML);
            break;
        default:
        // code block
    }
    return resultado;
}

