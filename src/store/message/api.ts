import { api } from "../api";

const messageAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMessage: build.query({
      query: () => ({ url: "/", responseHandler: (res) => res.text() }),
    }),
  }),
});

export const { useGetMessageQuery } = messageAPI;
