import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Redux toolkit handles the fetch request
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Convention naming use<endpointName>Query
export const { useGetProductsQuery } = productsApiSlice;
