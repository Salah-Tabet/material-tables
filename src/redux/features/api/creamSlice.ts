import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { SaveMappingsPayload } from "../../../types";

// Define a service using a base URL and expected endpoints
export const creamSlice = createApi({
  reducerPath: 'creamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + '/rest',
    mode: 'cors',
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getServices: builder.query<any, void>({
      query: () => `services`,
    }),
    getService: builder.query<any, number>({
      query: (serviceId: number) => `services/${serviceId}`,
    }),
    getRoles: builder.query<any[], void>({
      query: () => `roles`,
    }),
    getRole: builder.query<any[], number>({
      query: (roleId) => `roles/${roleId}`,
    }),
    getActions: builder.query<any[], number>({
      query: (serviceId: number) => `actions/search/find-by-service-ids?serviceId=${serviceId}`,
    }),
    roleReportPermissions: builder.query<any[], number>({
      query : (roleId: number) => `reports/role-access-reports?role-ids?roleId=${roleId},`
    }),
    serviceReportPermissions: builder.query<any[], number>({
      query : (roleId: number) => `reports/role-access-reports?role-ids?roleId=${roleId},`
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceQuery,
  useGetRolesQuery,
  useGetRoleQuery,
  useGetActionsQuery,
} = creamSlice;
