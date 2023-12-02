import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey, baseUrl } from './constant';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    movieCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey,
        }
      })

    }),

    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        params: {
          api_key: apiKey,
          page: query.page
        }
      })

    }),


  })
});

export const { useMovieByCategoryQuery, useMovieByPageQuery } = movieApi;