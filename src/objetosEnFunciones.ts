import { title } from 'process';

/* data es un objeto que recibe lo que se establece dentro */
const login = (data: { email: string; password: number }) => {
  console.log(data.email);
  console.log(data.password);
};

login({
  email: 'ixcoty@gmail.com',
  password: 123123124,
});

const products: any[] = [];

/* funcion que soporta objeto */
const agregarProducto = (data: {
  titulo: string;
  created: Date;
  stock: number;
  size?: string;
}) => {
  products.push(data);
};

agregarProducto({
  titulo: 'cafe',
  created: new Date(),
  stock: 23,
  size:"XL"
});

console.log(products[0])
