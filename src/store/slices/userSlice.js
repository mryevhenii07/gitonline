import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  nickName: null,
  checkbox: null,
  profilePic: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.nickName = action.payload.nickName;
      state.checkbox = action.payload.checkbox;
      state.profilePic = action.payload.profilePic;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.nickName = null;
      state.checkbox = null;
      state.profilePic = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
