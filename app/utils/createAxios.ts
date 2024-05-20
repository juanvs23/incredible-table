import axios from "axios";

export const abortController = new AbortController();
export const createAxios = () => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api`,
    signal: abortController.signal,
  });
};
