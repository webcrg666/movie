import { IMovie, Ifilters, IgenreFilterItem, Ifavorites } from '@/interfaces';
import { POPULARITY_VARIANTS, RATING_VARIANTS } from '@/settings/filter';

function getYear(date: string) {
  return date.slice(0, 4);
}

function checkGenre(filter: IgenreFilterItem[], productGenres: number[]) {
  for (let i = 0; i < filter.length; i += 1) {
    if (productGenres.includes(filter[i].id)) {
      return true;
    }
  }
  return false;
}

function checkUserFilter(
  itemId: number,
  userFilter: string,
  favorites: Ifavorites
) {
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

interface IFilterChain {
  items: IMovie[];
  filters: Ifilters;
  isAuthenticatedUser?: boolean;
}

export function filterChain({
  items,
  filters,
  isAuthenticatedUser,
}: IFilterChain) {
  return items.filter((item) => {
    let result = true;

    Object.entries(filters).forEach(([name, value]) => {
      if (name === 'userFilter' && isAuthenticatedUser) {
        const isValidByUserFilter = checkUserFilter(
          item.id,
          filters.userFilter!,
          filters.favorites!
        );

        if (!isValidByUserFilter) {
          result = false;
          return;
        }
      }

      if (name === 'yearFilter') {
        const isRightYear = filters.yearFilter === getYear(item.release_date);

        if (!isRightYear) {
          result = false;
          return;
        }
      }

      if (name === 'genre' && filters.genre?.length !== 0) {
        const isIncludesGenre = checkGenre(filters.genre!, item.genre_ids);

        if (!isIncludesGenre) {
          result = false;
          return;
        }
      }

      if (name === 'rating') {
        const isHighRating = item.vote_average >= 5;
        const isValid =
          value === RATING_VARIANTS.HIGH ? isHighRating : !isHighRating;

        if (!isValid) {
          result = false;
        }
      }

      if (name === 'popularity') {
        const isPopular = item.popularity >= 100 && item.vote_count >= 200;
        const isValid =
          value === POPULARITY_VARIANTS.HIGH ? isPopular : !isPopular;

        if (!isValid) {
          result = false;
        }
      }
    });

    return result;
  });
}

export default { filterChain };
