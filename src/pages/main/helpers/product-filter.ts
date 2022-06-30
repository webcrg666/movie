import { IMovie, Ifilters, IgenreFilterItem } from '@/interfaces';

function getYear(date: string) {
  return date.slice(0, 4);
}

function checkGenre(filter: IgenreFilterItem[], productGenres: number[]) {
  for (let i = 0; i < filter.length; i += 1) {
    if (productGenres.includes(filter[i].name)) {
      return true;
    }
  }
  return false;
}

function checkUserFilter(itemId: number, { userFilter, favorites }: Ifilters) {
  const { starred, bookmarks } = favorites;

  if (userFilter === 'Всё') {
    return true;
  }

  if (userFilter === 'Избранное') {
    return starred.includes(itemId);
  }

  if (userFilter === 'Посмотреть позже') {
    return bookmarks.includes(itemId);
  }

  return false;
}

function productFilter(
  products: IMovie[],
  userRole: string,
  filters: Ifilters
) {
  const genreFiltersActive = filters.genre.length;
  const isAuthenticatedUser = userRole === 'user';

  return products.filter((item) => {
    const isRightYear = filters.yearFilter === getYear(item.release_date);
    const isValidByUserFilter = checkUserFilter(item.id, filters);

    if (!isRightYear) {
      return false;
    }

    if (isAuthenticatedUser && !isValidByUserFilter) {
      return false;
    }

    if (!genreFiltersActive) {
      return true;
    }

    return checkGenre(filters.genre, item.genre_ids);
  });
}

export default productFilter;
