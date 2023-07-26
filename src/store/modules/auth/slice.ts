import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetTeams, LoginState, Team } from "./types";
import { auth, getTeamsForRegister } from "./thunks";

const initialState: LoginState = {
  isLogged: false,
  status: "idle",
  error: "",
  message: "",
  userName: "",
  getTeams: {} as GetTeams,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    change: (state) => {
      state.isLogged !== !state.isLogged;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state: LoginState) => {
        state.status = "loading";
      })
      .addCase(
        auth.fulfilled,
        (
          state: LoginState,
          action: PayloadAction<{
            message: string;
            data: { isLogged: boolean; userName: string };
          }>
        ) => {
          state.isLogged = action.payload.data.isLogged;
          state.message = action.payload.message;
          state.userName = action.payload.data.userName;
          window.location.href = "/home";
        }
      )
      .addCase(auth.rejected, (state: LoginState, action) => {
        state.error = action.error.message;
      })
      .addCase(getTeamsForRegister.pending, (state: LoginState, action) => {
        state.getTeams.status = "loading";
      })
      .addCase(
        getTeamsForRegister.fulfilled,
        (state: LoginState, action: PayloadAction<Team[]>) => {
          state.getTeams.status = "succeeded";
          state.getTeams.teams = action.payload.map((team) => team);
        }
      )
      .addCase(getTeamsForRegister.rejected, (state: LoginState, action) => {
        state.getTeams.error = action.error.message;
        state.getTeams.status = "rejected";
      });
  },
});

export const { change } = authSlice.actions;

export default authSlice.reducer;
