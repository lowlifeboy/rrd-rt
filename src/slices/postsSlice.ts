import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Api} from "../api";
import IPost from "../entities/IPost";
import IComment from "../entities/IComment";
import IUser from "../entities/IUser";

export interface PostsState {
  filter: string | undefined;
}

const initialState: PostsState = {
  filter: undefined,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string | undefined>) => {
      return {...state, filter: action.payload}
    },
  },
});

const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const { setFilter } = actions;
// Export the reducer, either as a default or named export
export default reducer;
