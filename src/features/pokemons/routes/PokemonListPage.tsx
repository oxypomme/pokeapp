import { useEffect, useMemo, useState } from "react";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";
import useFetch from "@/hooks/useFetch";

import type { Pokemon } from "..";
import PokemonList from "../components/PokemonList";
import PokemonTable from "../components/PokemonTable";

const PokemonCreationPage = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [dataView, setDataView] = useState<"table" | "grid">("grid");

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

  const maxPage = Math.round((data?.count ?? 0) / limit);
  const dataParams = {
    pokemons: !isLoading ? (data?.results as Pokemon[]) : [],
    loadingItems: isLoading ? limit : undefined,
  };

  const handleDataViewChange = () => {
    if (dataView === "table") {
      setDataView("grid");
    } else {
      setDataView("table");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, marginRight: "1rem" }}>
          <InputControl
            label="Search"
            type="text"
            placeholder="Pikachu"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value.toLowerCase())
            }
          />
        </div>
        <button
          style={{ textTransform: "capitalize" }}
          onClick={() => handleDataViewChange()}
        >
          {dataView}
        </button>
      </div>

      {!error ? (
        (dataView === "grid" && <PokemonList {...dataParams} />) ||
        (dataView === "table" && <PokemonTable {...dataParams} />)
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
