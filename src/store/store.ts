import { configureStore } from "@reduxjs/toolkit";
import practiceSlice from "./slices/practiceSlice/practiceSlice";

export const store = configureStore({
    reducer: {
        practice: practiceSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
