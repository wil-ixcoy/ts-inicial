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
  size: 'XL',
});

console.log(products[0]);

/* productos con tipos*/

/* tipo producto */
type Product = {
  titulo: string;
  created: Date;
  stock: number;
  size?: string;
};


/* arreglo de tipo producto */
const ProductType: Product[] = [];

/* funcion que recibe como parametro el tipo producto, que contiene datos que deben ser cumplidos */
const addProductoForType = (data: Product) => {
  ProductType.push(data);
};

addProductoForType({
  titulo: 'Agua',
  created: new Date(),
  stock: 23,
  size: 'S',
});

console.log(ProductType)
