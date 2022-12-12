import { useEffect, useState } from "react";

const useFetch = <D>(url: string) => {
  const [data, setData] = useState<D | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handler = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };
    handler();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
