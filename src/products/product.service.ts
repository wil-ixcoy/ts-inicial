import { Products } from './products.model';

export const productos: Products[] = [];

export const addProduct = (data: Products) => {
  productos.push(data);
};


export const calcStock = (): number => {
  let total = 0;
  productos.forEach((item) => {
    total += item.stock;
  });
  return total;
};
