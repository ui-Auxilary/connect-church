import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "reducers/selectLanguageSlice";

export const store = configureStore({
    reducer: {
        languageSlice: languageReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch