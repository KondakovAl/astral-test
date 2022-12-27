import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../constants/global';
import { ICard } from '../types/types';

export const fetchCards: AsyncThunk<ICard[], void, {}> = createAsyncThunk(
  '/cards/fetchCards',
  async function () {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    return data as ICard[];
  }
);

interface cardsProps {
  data: ICard[];
  status: 'loading' | 'resolved' | 'rejected';
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    data: [],
    status: 'loading',
  } as cardsProps,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'resolved';
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default cardsSlice.reducer;
