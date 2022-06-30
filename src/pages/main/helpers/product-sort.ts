import { IMovie, Ifilters } from '@/interfaces';

function sortByPopularity(products: IMovie[], sortType: string) {
  return products.sort((a: IMovie, b: IMovie) =>
    sortType === 'descent'
      ? b.popularity - a.popularity
      : a.popularity - b.popularity
  );
}
function sortByVoteAverage(products: IMovie[], sortType: string) {
  return products.sort((a: IMovie, b: IMovie) =>
    sortType === 'descent'
      ? b.vote_average - a.vote_average
      : a.vote_average - b.vote_average
  );
}

function productSort(products: IMovie[], { sortBy, sortType }: Ifilters) {
  if (sortBy === 'popularity') {
    return sortByPopularity(products, sortType);
  }

  if (sortBy === 'vote_average') {
    return sortByVoteAverage(products, sortType);
  }

  return products;
}
export default productSort;
