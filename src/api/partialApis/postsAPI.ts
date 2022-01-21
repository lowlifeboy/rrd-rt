import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IPost from "../../entities/IPost";
import {BASE_URL} from "../../constants";

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Posts', 'FilteredPosts'],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], {page: number, authorId?: string}>({
      query: ({page, authorId}) => authorId
        ? `posts?_page=${page}&_limit=10&userId=${authorId}`
        : `posts?_page=${page}&_limit=10`,
      providesTags: (result, error, page) =>
        result
          ? [
            // Provides a tag for each post in the current page,
            // as well as the 'PARTIAL-LIST' tag.
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: 'PARTIAL-LIST' },
          ]
          : [{ type: 'Posts', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
