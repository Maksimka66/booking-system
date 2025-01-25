import { baseUrl } from '@/utils/constants/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getAllBusiness: builder.query({
            query: () => '/users'
        }),
        getOneBusiness: builder.query({
            query: (id) => `/users/${id}`
        })
    })
});

export const { useGetAllBusinessQuery, useGetOneBusinessQuery } = clientApi;
