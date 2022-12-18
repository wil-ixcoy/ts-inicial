/* typescript infiere el dato */
let isEnable = true;

/* designado por mi */
let isNew: boolean = false;

console.log('Es verdadero?', isNew);

const random = Math.random();
console.log("random", random);
isNew = random >= 0.5 ? true : false;

console.log("ES nuevo ahora? (depende del numero random)", isNew);
