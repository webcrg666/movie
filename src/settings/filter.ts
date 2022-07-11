export const DEFAULT_SORT_BY = 'popularity';
export const DEFAULT_SORT_TYPE = 'descent';
export const DEFAULT_YEAR_FILTER_VALUE = '2020';
export const DEFAULT_USER_FILTER_VALUE = 'Всё';
export const DROPDOWN_SETTINGS = {
  sort: [
    {
      name: 'Популярные по убыванию',
      dropdownType: 'sort',
      sortBy: 'popularity',
      sortType: 'descent',
      selected: true,
    },
    {
      name: 'Популярные по возрастанию',
      dropdownType: 'sort',
      sortBy: 'popularity',
      sortType: 'ascent',
      selected: false,
    },
    {
      name: 'Рейтинг по убыванию',
      dropdownType: 'sort',
      sortBy: 'vote_average',
      sortType: 'descent',
      selected: false,
    },
    {
      name: 'Рейтинг по возрастанию',
      dropdownType: 'sort',
      sortBy: 'vote_average',
      sortType: 'ascent',
      selected: false,
    },
  ],
  yearFilter: [
    {
      name: '2020',
      dropdownType: 'filterYear',
      selected: true,
    },
    {
      name: '2019',
      dropdownType: 'filterYear',
      selected: false,
    },
    {
      name: '2018',
      dropdownType: 'filterYear',
      selected: false,
    },
  ],
  userFilter: [
    {
      name: 'Всё',
      dropdownType: 'userFilter',
      selected: true,
    },
    {
      name: 'Избранное',
      dropdownType: 'userFilter',
      selected: false,
    },
    {
      name: 'Посмотреть позже',
      dropdownType: 'userFilter',
      selected: false,
    },
  ],
};
export const CHECKBOXES = [
  {
    id: 28,
    name: 'боевик',
    checked: false,
  },
  {
    id: 12,
    name: 'приключения',
    checked: false,
  },
  {
    id: 16,
    name: 'мультфильм',
    checked: false,
  },
  {
    id: 35,
    name: 'комедия',
    checked: false,
  },
  {
    id: 80,
    name: 'криминал',
    checked: false,
  },
  {
    id: 99,
    name: 'документальный',
    checked: false,
  },
  {
    id: 18,
    name: 'драма',
    checked: false,
  },
  {
    id: 10751,
    name: 'семейный',
    checked: false,
  },
  {
    id: 14,
    name: 'фэнтези',
    checked: false,
  },
  {
    id: 36,
    name: 'история',
    checked: false,
  },
  {
    id: 27,
    name: 'ужасы',
    checked: false,
  },
  {
    id: 10402,
    name: 'музыка',
    checked: false,
  },
  {
    id: 9648,
    name: 'детектив',
    checked: false,
  },
  {
    id: 10749,
    name: 'мелодрама',
    checked: false,
  },
  {
    id: 878,
    name: 'фантастика',
    checked: false,
  },
  {
    id: 10770,
    name: 'телевизионный фильм',
    checked: false,
  },
  {
    id: 53,
    name: 'триллер',
    checked: false,
  },
  {
    id: 10752,
    name: 'военный',
    checked: false,
  },
  {
    id: 37,
    name: 'вестерн',
    checked: false,
  },
];
export const RATING_VARIANTS = {
  HIGH: 'high',
  LOW: 'low',
};
export const POPULARITY_VARIANTS = {
  HIGH: 'high',
  LOW: 'low',
};
