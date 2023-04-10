import { createSlice } from "@reduxjs/toolkit";
import { CommonSliceInterface } from "./interface";

const initialState: CommonSliceInterface = {
  isLogin: false,
  globalLoading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: { a() {} },
});

export const { a } = commonSlice.actions;

export default commonSlice.reducer;
