import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Redux toolkit handles the fetch request
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL / auth,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Convention naming use<endpointName>Query
export const { useLoginMutation } = usersApiSlice;
