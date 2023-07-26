import { api } from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserDto } from "./types";

export const auth = createAsyncThunk(
  "auth/login",
  async ({ login, password }: { login: string; password: string }) => {
    const response = await api.post("/auth", {
      login: login,
      password: password,
    });

    return response.data;
  }
);

export const getTeamsForRegister = createAsyncThunk(
  "auth/register",
  async () => {
    const response = await api.get("/teams");

    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ last_name, name, login, password, team_id }: CreateUserDto) => {
    const response = await api.post("/users", {
      name,
      last_name,
      login,
      password,
      team_id,
    });

    return response.data;
  }
);
