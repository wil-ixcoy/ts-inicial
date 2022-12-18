/* es un arreglo inferido de numeros */
let precios = [2, 3, 4, 5, 6, 7, 8, 9, 2345, 345];
/* solo se pueden agregar elementos que sean igual al array */
precios.push(69);

console.log('Array precios: ', precios);





/* si en la definicion  del array se definen varios datos,
se puede hacer push de esos mismos tipos de datos definidos*/

//puede ser de dos tipos o más.
let variado = [23, 12, 'hola', true];
variado.push(87);
variado.push('Mundo');
variado.push(false);

console.log('Array variado: ', variado);




/* definicion de un array con su tipo*/
let arrayDefinido: number[] = [23, 36];
console.log('Array con valor definido: ', arrayDefinido);





/* para definir un array con diversos datos se hace de la siguiente
manera */
let mixed: (number | string | boolean | Object)[] = ['hola', false];
mixed.push(34);
/* objeto */
mixed.push({});
console.log('Array mixto: ', mixed);
