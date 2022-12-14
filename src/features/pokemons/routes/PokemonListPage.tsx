import { useEffect, useState } from "react";
import { FaBorderAll, FaSync, FaTable } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";

import InputControl from "@/components/InputControl";
import Paginator from "@/components/Paginator";

import type { Pokemon } from "..";
import PokemonList from "../components/PokemonList";
import PokemonTable from "../components/PokemonTable";
import { useFetchPokemonList } from "../hooks/query";

import animations from "@/animations.module.scss";

type PokemonListView = "grid" | "table";

const PokemonListPage = (): JSX.Element => {
  const [limit, setLimit] = useState(15);

  // Using search params as state
  const [urlParams, setUrlParams] = useSearchParams();

  const view = urlParams.get("view") ?? "grid";
  const setView = (view: PokemonListView) =>
    setUrlParams((p) => {
      p.set("view", view);
      return p;
    });

  const page = parseInt(urlParams.get("page") ?? "1");
  const setPage = (v: number) =>
    setUrlParams((p) => {
      p.set("page", v.toString());
      return p;
    });

  const search = urlParams.get("search") ?? "";
  const setSearch = (v: string) =>
    setUrlParams((p) => {
      p.set("search", v);
      return p;
    });

  // Clear page if searching or changing limit
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, limit]);

  const { data, error, isLoading, isFetching, refetch } = useFetchPokemonList(
    limit * (page - 1),
    search,
    limit
  );

  const maxPage = Math.round((data?.count ?? 0) / limit);
  const viewParams = {
    pokemons: !isLoading ? (data?.results as Pokemon[]) : [],
    loadingItems: isLoading ? limit : undefined,
  };

  const handleDataViewChange = () => {
    let nextView: PokemonListView = "table";
    if (view === "table") {
      nextView = "grid";
    }
    setView(nextView);
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
          {view === "grid" ? <FaBorderAll /> : <FaTable />}
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
        (view === "grid" && <PokemonList {...viewParams} />) ||
        (view === "table" && <PokemonTable {...viewParams} />)
      ) : (
        <>
          Error: <span style={{ color: "red" }}>{error.message}</span>
        </>
      )}

      <Paginator count={maxPage} current={page} onChange={(v) => setPage(v)} />
    </>
  );
};

export default PokemonListPage;
