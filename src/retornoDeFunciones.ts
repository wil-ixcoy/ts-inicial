/* espeficifamos el retonrno que es :number  antes de la flecha o antes de la llave en la
funcion normal

function hola2e(h: number): number {
  return h;
}*/

const calcular = (prices: number[]): number => {
  let total = 0;

  prices.forEach((item) => {
    total += item;
  });
  return total;
};

/* mostrarTotal es una funcion void por que no retorna nada, solo ejecuta codigo, si nos se coloca
la palabra void, y no rentorna, queda por defecto void */
const mostrarTotal = (prices: number[]): void => {
  const rta = calcular(prices);
  console.log(rta);
};

mostrarTotal([2, 3, 4, 3]);
