import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/auth/slice";
import feedbackSlice from "./modules/feedback/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    feedback: feedbackSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
