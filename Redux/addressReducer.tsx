import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: "address",
  baseQuery: fetchBaseQuery({ baseUrl: "https://data.phoneo.in/public/api/Address/" }),
  endpoints: (builder) => ({
        userAddress: builder.query({
            query:(string)=> ({
              url:`/${string}`,
              method:'GET',
            })
        })
  }),
});


export const inquiryApi = createApi({
  reducerPath: "inquiry",
  baseQuery: fetchBaseQuery({ baseUrl: "https://data.phoneo.in/public/api/SellerQuery/" }),
  endpoints: (builder) => ({
        userInquiry: builder.query({
            query:(number)=> ({
              url:`/${number}`,
              method:'GET',
            })
        })
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
useUserAddressQuery
} = addressApi;

export const {
  useUserInquiryQuery
  } = inquiryApi;
