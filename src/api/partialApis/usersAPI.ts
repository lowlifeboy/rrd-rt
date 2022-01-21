import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IUser from "../../entities/IUser";
import {BASE_URL} from "../../constants";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => `users`,
      providesTags: (result, error, page) =>
        result
          ? [
            // Provides a tag for each user in the current page,
            // as well as the 'PARTIAL-LIST' tag.
            ...result.map(({ id }) => ({ type: 'Users' as const, id })),
            { type: 'Users', id: 'PARTIAL-LIST' },
          ]
          : [{ type: 'Users', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
