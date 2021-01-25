// las variables 

// variables numericas 

var numero = 5;
console.log('el numero es:', numero);

// variables de texto 

var palabra = 'q hubo ';
console.log('la palabra es :', palabra);

// variables booleanas 

var boolean = true
console.log('estado booleano', boolean);

// variables array 

var colores = ['azul', 'verde', 'roojo'];
console.log('los colores son :', colores); // este trae todos los objetos del arreglo 
console.log('los colores son :', colores[1]); // este console.log muestra la pocision en especifico con la llave al final

// variables de tipo objeto (object) = propiedad y el valor 

var ajiaco = {
    'ingrediente1': 'pollo',
    'ingrediente2': 'papa',
    'ingrediente3': 'agua'
}

console.log('el ajiaco tiene :', ajiaco);
console.log('el ajiaco tiene :', ajiaco.ingrediente1); // este console.log se hace para traer un elemento del objeto en especifico


// variables DOM  (modelo de objetos del documento )

var caja = document.querySelector("#caja");
console.log('caja ', caja);

caja.style.width = "222px";
caja.style.height = "222px";
caja.style.background = 'black';