import { useMemo, useState } from "react";
import { type UseQueryResult, useQueries } from "@tanstack/react-query";

const useMultipleFetch = <TData, TUrlParams, TError = Error>(
  queryKey: string,
  urlResolver: (param: TUrlParams) => string
  // config?: {}
) => {
  const [queries, setQueries] = useState<
    {
      queryKey: [string, TUrlParams];
      queryFn: () => Promise<TData>;
    }[]
  >([]);

  const queryResults = useQueries({ queries }) as UseQueryResult<
    TData,
    TError
  >[];
  const queryFnBuilder = (param: TUrlParams) => async (): Promise<TData> => {
    const res = await fetch(urlResolver(param));
    return res.json();
  };

  const res = useMemo(() => {
    const d: TData[] = [];
    let err: TError | undefined;
    let loadingCount = 0;
    for (const { data, isLoading, error } of queryResults) {
      loadingCount += +isLoading;

      if (error) {
        err = error;
      }

      if (data) {
        d.push(data);
      }
    }

    return {
      data: d,
      loadingCount,
      error: err,
    };
  }, [queryResults]);

  return {
    ...res,

    addQueries: (params: TUrlParams[]) => {
      setQueries([
        ...queries,
        ...params.map((p) => ({
          queryKey: [queryKey, p] as [string, TUrlParams],
          queryFn: queryFnBuilder(p),
        })),
      ]);
    },

    removeQueries: (params: TUrlParams[]) => {
      setQueries(
        queries.filter(({ queryKey }) => !params.includes(queryKey[1]))
      );
    },
  };
};

export default useMultipleFetch;
