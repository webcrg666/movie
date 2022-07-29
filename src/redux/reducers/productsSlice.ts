import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moviesList from '@/movies-list';
import { IMovie } from '@/interfaces';

const initialState = {
  productsSource: moviesList,
  products: [] as IMovie[],
  paginationSize: 10,
  pageNumber: 1,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProductListSource(state, action: PayloadAction<IMovie[]>) {
      state.productsSource = action.payload;
      state.products = action.payload;
    },
    updateProductList(state, action: PayloadAction<IMovie[]>) {
      state.products = action.payload;
    },
    setFirstPage(state) {
      state.pageNumber = 1;
    },
    setPrevPage(state) {
      state.pageNumber -= 1;
    },
    setNextPage(state) {
      state.pageNumber += 1;
    },
  },
});

export default productsSlice.reducer;
