/* Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un
array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
155, 25, etc. */

let rellenar = (cantidad, array) => {
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 300));    
    }
    return array;
}

let ultimoDigito = (ultDigito, array) => {
    let ultDigArray = [];
   for (let num of array) {
       if (num.toString().slice(-1) === ultDigito.toString()) {
            ultDigArray.push(num);
       }
   }
    return ultDigArray;
}

let cantidad = parseInt(prompt('Pon la cantidad: '));
let array = [];
array = rellenar(cantidad, array);
console.log(array);
let ultDigito = parseInt(prompt('Pon el ultimo digito: '));
let arrayUltDig = ultimoDigito(ultDigito, array);
console.log(arrayUltDig);