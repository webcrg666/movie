export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IgenreFilterItem {
  name: number;
  type: string;
}

export interface Ifavorites {
  starred: number[];
  bookmarks: number[];
}

export interface Ifilters {
  sortBy?: string;
  sortType?: string;
  yearFilter?: string;
  userFilter?: string;
  genre?: IgenreFilterItem[];
  favorites?: Ifavorites;
}

export interface IcheckBoxClickAction {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface IchangeFilterDropdownAction {
  dropdownType: string;
  name: string;
}

export interface IchangeSortDropdownAction {
  sortBy: string;
  sortType: string;
  name: string;
  dropdownType: string;
}

export interface IoptionsParam {
  name: string;
  dropdownType: string;
  sortBy: string;
  sortType: string;
  selected: boolean;
}
