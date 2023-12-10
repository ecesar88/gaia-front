import { AxiosError, AxiosRequestConfig, Method } from "axios";
import { useState } from "react";
import api from "../api";

interface useApiOptions {
  url: string;
  method?: Method;
  params?: AxiosRequestConfig["params"];
}

type ErrorType = {
  name: string;
  reason?: string;
} | null;

const useApi = <T = object>(options: useApiOptions) => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<ErrorType>(null);
  const [isLoading, setIsLoading] = useState(true);

  const execute = async () => {
    try {
      const data = await api<T>({
        method: options.method ?? "GET",
        url: options.url,
        params: options.params ?? undefined,
      });

      console.log("STATUS >>>>>>>>>>>>> ", data.status);

      setData(() => {
        setError(null);
        return data.data as T;
      });
    } catch (error) {
      setError(() => {
        if (error instanceof AxiosError) {
          return {
            name: error.name,
            reason: error.message,
          };
        }

        return {
          name: "Network Error",
        };
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    execute,
    isLoading,
    error,
    data,
  };
};

export default useApi;
