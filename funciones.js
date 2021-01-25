/// FUNCIONES ///7

// funciones sin parametro 

// declarar la funcion

function saludo() {

    // tarea de la funcion 
    console.log('hola')

}

// ejecutar la funcion 

saludo();

// funciones con parametro 

function operacion(digito1, digito2) {

    var resultado = digito1 + digito2;
    console.log('el resultado es ', resultado)
}

operacion(12, 45);

//funciones con retorno sin parametro 

function retorno() {

    var numero = 7;
    return numero;
}
console.log(retorno())

// funciones con retorno con parametro 

function retorno1(numero) {
    return numero;
}
console.log(retorno1(77))