import { useEffect, useMemo, useState } from "react";

const useFetch = <D>(url: string, params?: Record<string, string | number>) => {
  const [data, setData] = useState<D | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const parsedUrl = useMemo(() => {
    let u = url;
    if (params) {
      u +=
        "?" +
        Object.entries(params)
          .map(([key, value]) => key + "=" + value)
          .join("&");
    }
    return u;
  }, [url, params]);

  useEffect(() => {
    const handler = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(parsedUrl);
        const d = await res.json();
        setData(d);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };
    handler();
  }, [parsedUrl]);
  return { data, isLoading, error };
};

export default useFetch;
