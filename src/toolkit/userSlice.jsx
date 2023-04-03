import { createSlice } from "@reduxjs/toolkit";
import { localUserService } from "../services/localUserService";

const initialState = {
  userInfor: localUserService.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userInfor = action.payload;
    },
  },
});

export const { setUserLogin } = userSlice.actions;

export default userSlice.reducer;
