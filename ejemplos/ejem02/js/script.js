"use strict"

const num1 = document.getElementById("num1"); // NÚMERO

const botonesBases = document.querySelectorAll(".botonesbase");

const bases = document.getElementById("bases"); // RESULTADO

let resultado = "";

// FUNCIONES PARA CONVERTIR DE DECIMAL A BASES
for (let operador of botonesBases) {
    operador.addEventListener("click", function () {
        resultado = resolverBase((num1.value), operador.value);
        bases.innerHTML = resultado;
    });
}


// -------------------*******-------------------
const copiar = document.getElementById("copiar");

// BOTÓN COPIAR
copiar.addEventListener("click", function (event) {
    num2.value = bases.innerHTML;
});
// -------------------*******-------------------

const num2 = document.getElementById("num2"); // NÚMERO

const botonesDecimal = document.querySelectorAll(".botonesdecimal");

const decimal = document.getElementById("decimal"); // RESULTADO

// FUNCIONES PARA CONVERTIR DE BASES A DECIMAL
for (let operador of botonesDecimal) {
    operador.addEventListener("click", function () {
        resultado = resolverDecimal((num2.value), operador.value);
        decimal.innerHTML = isNaN(resultado) ? "Error" : resultado;
    });
}
