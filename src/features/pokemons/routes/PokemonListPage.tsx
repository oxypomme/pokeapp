import { useEffect, useState } from "react";
import { FaBorderAll, FaSync, FaTable } from "react-icons/fa";
import classNames from "classnames";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";
import useFetch from "@/hooks/useFetch";

import type { Pokemon } from "..";
import PokemonList from "../components/PokemonList";
import PokemonTable from "../components/PokemonTable";

import animations from "@/animations.module.scss";

const PokemonCreationPage = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [dataView, setDataView] = useState<"table" | "grid">("grid"); // TODO: URL

  const { data, error, isLoading, isFetching, refetch } = useFetch<{
    results: Pokemon[];
    count: number;
  }>(["pokemon-list"], `https://pokeapi.fly.dev/oxypomme1222/pokemons`, {
    params: { limit, offset: limit * (page - 1), searchText: search },
    keepPreviousData: true,
  });

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
          title="Change display mode"
          onClick={() => handleDataViewChange()}
        >
          {dataView === "grid" ? <FaBorderAll /> : <FaTable />}
        </button>
        <button
          title="Reload data"
          style={{ marginLeft: "1rem" }}
          onClick={() => refetch()}
        >
          <FaSync className={classNames({ [animations.spin]: isFetching })} />
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
