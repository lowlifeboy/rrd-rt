import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import postReducer from '../slices/postSlice';
import postsReducer from '../slices/postsSlice';
import {setupListeners} from '@reduxjs/toolkit/query/react'
import {postsApi} from "../api/partialApis/postsAPI";
import {usersApi} from "../api/partialApis/usersAPI";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    currentPost: postReducer,
    posts: postsReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(usersApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
