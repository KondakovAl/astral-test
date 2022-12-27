import { createSlice } from '@reduxjs/toolkit';

interface authSliceProps {
  isAuth: boolean;
  user: string | null;
  token: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: null,
    token: null,
  } as authSliceProps,
  reducers: {
    setCredentials: (state: authSliceProps, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      state.isAuth = !!user;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logOut: (state: authSliceProps) => {
      state.isAuth = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
