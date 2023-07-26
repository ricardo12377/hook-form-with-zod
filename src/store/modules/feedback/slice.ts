import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackState, Project } from "./props";

const initialState: FeedbackState = {
  projects: [{} as Project],
  getProjects: {
    status: "idle",
    error: undefined,
  },
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    Default() {
      console.log("Feedback");
    },
  },
});

export const { Default } = feedbackSlice.actions;

export default feedbackSlice.reducer;
