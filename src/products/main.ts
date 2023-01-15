import { productos, addProduct, calcStock } from './product.service';

addProduct({
  titulo: 'Camisa Azul',
  created: new Date(),
  stock: 45,
  size: 'XL',
});

addProduct({
  titulo: 'Pantalones',
  created: new Date(),
  stock: 23,
  size: 'M',
});

const rta = calcStock();
console.log(productos);
console.log(rta);
