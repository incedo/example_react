import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userData: null,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
    setProfile(state, action) {
        state.profile = action.payload;
    },
  },
});

export const { login, logout, setProfile } = userSlice.actions;

export default userSlice.reducer;