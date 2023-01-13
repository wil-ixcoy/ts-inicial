type Sizes2 = 'S' | 'M' | 'L' | 'XL';

function createProductToJson(
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes2
) {
  return {
    title,
    createdAt,
    stock,
    size,
  };
}

const createProductToJsonV2 = (
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes2
) => {
  return {
    title,
    createdAt,
    stock,
    size,
  };
};

let data = createProductToJson('Crema nivea', new Date(), 23, 'M');
/* con el signo de interroacion al lado del parametro puede o no enviarse, es opcional */
let arrow = createProductToJsonV2('Anex', new Date(), 233,"XL")
console.log(data);
console.log(arrow);
