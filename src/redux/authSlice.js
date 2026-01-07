import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("accessToken");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user || null,
    accessToken: token || null,
    isAuthenticated: !!token,
    loading: false,
    error: null,
  },
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    authFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFail,
  logout,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
