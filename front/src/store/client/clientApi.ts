import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientApi = createApi({
    reducerPath: "clientApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/users",
    }),
    endpoints: (builder) => ({
        getAllBusiness: builder.query({
            query: () => "/business",
        }),
        getOneBusiness: builder.query({
            query: (id) => `/business/${id}`,
        }),
    }),
});
