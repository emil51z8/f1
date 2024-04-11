import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const formular1Api = createApi({
    reducerPath: 'formular1Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ergast.com/api/f1' }),
    endpoints: (builder) => ({
        getDrivers: builder.query({
        query: () => {
            return '/drivers.json';
        }
        }),
        getCircuits: builder.query({
        query: () => {
            return '/circuits.json';
        }
        }),
        getSearchDrivers: builder.query({
        query: () => {
            return '/drivers.json?limit=500';
        }
        }),
    }),
    });

export const { useGetDriversQuery } = formular1Api;
export const { useGetCircuitsQuery } = formular1Api;
export const { useGetSearchDriversQuery } = formular1Api;
export default formular1Api;