import { IMovie } from '@/interfaces';

function findProduct(products: IMovie[], id: number) {
  return products.find((item) => item.id === id);
}

export default findProduct;
