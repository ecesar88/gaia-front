import { AxiosError, AxiosRequestConfig, Method } from "axios";
import { useState } from "react";
import api from "../api";

interface useApiOptions<T = object> {
  url: string;
  method?: Method;
  params?: AxiosRequestConfig["params"];
  onComplete?: (data: T) => void;
}

type ErrorType = {
  name: string;
  reason?: string;
} | null;

const useApi = <T = object>(options: useApiOptions<T>) => {
  const [response, setResponse] = useState<T | undefined>();
  const [error, setError] = useState<ErrorType>(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = async () => {
    setIsLoading(true);

    try {
      const data = await api<T>({
        method: options.method ?? "GET",
        url: options.url,
        params: options.params ?? undefined,
      });

      options?.onComplete?.(data.data as T);

      setResponse(() => {
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
    data: response,
  };
};

export default useApi;
