import { useMemo } from "react";
import { type QueryKey, useQuery } from "@tanstack/react-query";

const useFetch = <TData, TError = Error>(
  queryKey: QueryKey,
  url: string,
  config?: {
    params?: Record<string, string | number>;
    keepPreviousData?: boolean;
  }
) => {
  const parsedUrl = useMemo(() => {
    let u = url;
    if (config?.params) {
      u +=
        "?" +
        Object.entries(config?.params)
          .map(([key, value]) => key + "=" + value)
          .join("&");
    }
    return u;
  }, [url, config?.params]);

  // TODO: Debounce or throttle

  return useQuery<TData, TError>(
    config?.params ? [...queryKey, config.params] : queryKey,
    async () => {
      const res = await fetch(parsedUrl);
      return res.json();
    },
    { keepPreviousData: config?.keepPreviousData }
  );
};

export default useFetch;
