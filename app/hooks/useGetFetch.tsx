import { useState, useEffect, SetStateAction } from "react";
import { abortController, createAxios } from "@/app/utils";
import { AxiosError } from "axios";

export default function useGetFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | { message: string; code?: string }>(
    null,
  );
  const abort = abortController;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await createAxios().get(url);
        const jsonData = await response.data;
        setData(jsonData);
      } catch (error) {
        const axiosError = error as AxiosError;
        setError({ message: axiosError.message, code: axiosError.code });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, abort.signal]);

  return { data, error, loading };
}
