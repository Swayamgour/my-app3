import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mobileApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    // https://data.phoneo.in/public/api/Model/samsung
    baseUrl: "https://data.phoneo.in/public/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token.replaceAll('"', "")}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllMobiles: builder.query({
      query: () => ({
        url: "/v2/Ulist",
        method: "GET",
      }),
    }),
    getMobileDetail: builder.query({
      query: (id) => ({
        url: `v2/Elist/${id}`,
        method: "GET",
      }),
    }),

    byShop: builder.query({
      query: ({lat , lng}) => ({
        url: `BestSeller/${lat}/${lng}`,
        method: "GET",
      }),
    }),

    getMobiles: builder.query({
      query: (site) => ({
        url: `store/${site}`,
        method: "GET",
      }),
    }),

    getProductName: builder.query({
      query: (body) => ({
        // console.log(body)
        url: `MD/${body.phonemodel}/${body.phone}`,
        method: "GET",

      }),
    }),

    getProductspecs: builder.query({
      query: ({ slug }) => ({
        url: `Mobilespecs/${slug}`,
        method: "GET"

      }),
    }),
    getBanner: builder.query({
      query: ({ slug }) => ({
        url: `BannersP`,
        method: "GET"

      }),
    }),
    getAllModelDetail: builder.query({
      query: (Company) => ({
        url: `/Model/${Company}`,
        method: "GET"

      }),
    }),
    getMobileModels: builder.query({
      query: (Company) => ({
        url: `/Models/${Company}`,
        method: "GET"

      }),
    }),
    nearByStore: builder.query({
      query: ({ lat, lng }) => ({
        url: `/NearByStore/${lat}/${lng}`,
        method: "GET"

      }),
    }),
    UserSite: builder.query({
      query: (userSity) => ({
        url: `/UserSite/${userSity}`,
        method: "GET"

      }),
    }),

    postCount: builder.mutation({
      query: (body) => ({
        url: `Count`,
        method: "POST",
        body

      }),
    }),
    Login: builder.mutation({
      query: (body) => ({
        url: `Log`,
        method: "POST",
        body

      }),
    }),
    logWithOtp: builder.mutation({
      query: (body) => ({
        url: `Reg`,
        method: "POST",
        body

      }),
    }),
    resetOtp: builder.mutation({
      query: (body) => ({
        url: `Reset`,
        method: "POST",
        body

      }),
    }),
    GetTrusted: builder.query({
      query: () => "/Trusted",

    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductNameQuery,
  useGetMobileDetailQuery,
  useGetMobilesQuery,
  useGetProductspecsQuery,
  useGetAllMobilesQuery,
  usePostCountMutation,
  useLoginMutation,
  useLogWithOtpMutation,
  useResetOtpMutation,
  useGetTrustedQuery,
  useGetBannerQuery,
  useGetAllModelDetailQuery,
  useGetMobileModelsQuery,
  useByShopQuery,
  useNearByStoreQuery,
  useUserSiteQuery
} = mobileApi;
