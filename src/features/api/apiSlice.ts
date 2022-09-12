import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "httP//localhost:8000/api";

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Beer"],
    endpoints: (builder) => ({}),
    baseQuery: fetchBaseQuery({ baseUrl })
});