let precioInferido = 23;
let precio: number = 100;

precio = precio + 12;
console.log(precio);

/* variable definia pero sin un valor inicial,
para eso se debe colocar el tipo ya que typescript
no infiere el dato */
let precioEnStok: number;

//para usar una variable que fue definida y no asignada, se debe asigar
//para poder usarse.
precioEnStok = 2345;
console.log("precio en Stock", precioEnStok);

/* un hexadecimal es un numero */
let hexadecimal = 0xfff;
console.log("Esto es un hexadecimal", hexadecimal);

/* un binario es un numero */
let bin = 0b1010;
console.log("Esto es un binario", bin);

/* se tipea en minuscula (numbers) y no con mayuscula (Numbers) */

