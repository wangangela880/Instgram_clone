import { homeApi } from "service/homeService";
import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./slice/friendSlice"

export const store = configureStore({
    reducer:{
        [homeApi.reducerPath]:homeApi.reducer,
        friendReducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(homeApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;