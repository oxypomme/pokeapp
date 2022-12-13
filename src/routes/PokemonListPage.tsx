import { useEffect, useMemo, useState } from "react";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";
import type { Pokemon } from "@/features/pokemons";
import PokemonList from "@/features/pokemons/components/PokemonList";
import useFetch from "@/hooks/useFetch";

const PokemonCreationPage = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useFetch<{
    results: Pokemon[];
    count: number;
  }>(
    // TODO: Debounce or throttle
    `https://pokeapi.fly.dev/oxypomme1222/pokemons`,
    { limit, offset: limit * (page - 1), searchText: search }
  );

  // Clear page if searching or changing limit
  useEffect(() => {
    setPage(1);
  }, [search, limit]);

  const maxPage = useMemo(
    () => Math.round((data?.count ?? 0) / limit),
    [data, limit]
  );

  return (
    <>
      <InputControl
        label="Search"
        type="text"
        placeholder="Pikachu"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value.toLowerCase())
        }
      />

      {!error ? (
        <PokemonList
          pokemons={!isLoading ? (data?.results as Pokemon[]) : []}
          loadingItems={isLoading ? limit : undefined}
        />
      ) : (
        <>
          Error: <span style={{ color: "red" }}>{error.message}</span>
        </>
      )}

      <Paginator count={maxPage} current={page} onChange={(v) => setPage(v)} />
    </>
  );
};

export default PokemonCreationPage;
