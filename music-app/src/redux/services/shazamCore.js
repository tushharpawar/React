import { createapi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createapi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api9.p.rapidapi.com/',
    prepareHeaders: (headers) => {headers.set('X-RapidAPI-Key','9fe3b15c3cmsh9e2c741fcff208ep10c86bjsnd28859d0494c')
    return headers;
},
  }),
});

endpoints:(builder)=>({
    getTopCharts: builder.query({query: 'charts/world'})
})