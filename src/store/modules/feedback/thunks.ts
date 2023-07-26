import { api } from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "feedback/getProjects",
  async () => {
    const response = await api.get("/api/projects");

    return response.data;
  }
);
