import { createSlice } from '@reduxjs/toolkit';

interface paginationSliceProps {
  page: number;
  limit: number;
  totalCount: number;
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 1,
    limit: 6,
    totalCount: 0,
  } as paginationSliceProps,
  reducers: {
    setPage: (state: paginationSliceProps, { payload }) => {
      state.page = payload;
    },
    setTotalCount: (state: paginationSliceProps, { payload }) => {
      state.totalCount = payload;
    },
  },
});

export const { setPage, setTotalCount } = paginationSlice.actions;

export default paginationSlice.reducer;
