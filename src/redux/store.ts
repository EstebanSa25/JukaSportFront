import { configureStore } from '@reduxjs/toolkit';

export interface AppStore {
    user?: undefined;
}
export const store = configureStore<AppStore>({
    reducer: {
        /*counter: counterSlice.reducer,*/
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
