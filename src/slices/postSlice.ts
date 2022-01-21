import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Api} from "../api";
import IPost from "../entities/IPost";
import IComment from "../entities/IComment";
import IUser from "../entities/IUser";

export interface PostState {
  post: IPost | undefined;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  post: undefined,
  status: 'idle',
};

export const getPostById = createAsyncThunk(
  'post/getPostById',
  async (id: string) => {
    return await Api.getPostById(id);
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addAuthorData: (state, action: PayloadAction<IUser>) => {
      return {...state, post: {...state.post!, author: action.payload}}
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      return {...state, post: {...state.post!, comments: [...state.post!.comments!, action.payload]}}
    },
    deleteCommentById: (state, action: PayloadAction<string>) => {
      return {...state, post: {...state.post!, comments: [...state.post!.comments!.filter((comment) => comment.id !== action.payload)]}}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.status = 'idle';
        state.post = action.payload;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

const { actions, reducer } = postSlice;
// Extract and export each action creator by name
export const { addAuthorData, addComment, deleteCommentById } = actions;
// Export the reducer, either as a default or named export
export default reducer;
