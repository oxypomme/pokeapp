import { FaSync } from "react-icons/fa";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import useFetch from "@/hooks/useFetch";

import type { Pokemon } from "..";
import PokemonDetails from "../components/PokemonDetails";
import PokemonDetailsLoading from "../components/PokemonDetailsLoading";
import { useFetchPokemon } from "../hooks/query";

import animations from "@/animations.module.scss";

const PokemonDetailsPage = (): JSX.Element => {
  const { name: nameOrId } = useParams();

  const { data, isLoading, error, isFetching, refetch } = useFetchPokemon(
    nameOrId ?? "undefined"
  );

  return (
    <div>
      <div
        style={{ display: "flex", marginBottom: "1rem", paddingTop: "1.15rem" }}
      >
        <button
          title="Reload data"
          style={{ marginLeft: "auto" }}
          onClick={() => refetch()}
        >
          <FaSync className={classNames({ [animations.spin]: isFetching })} />
        </button>
      </div>
      {data && <PokemonDetails pokemon={data} />}
      {isLoading && <PokemonDetailsLoading />}
      {error && `Error: ${(error as Error).message}`}
    </div>
  );
};

export default PokemonDetailsPage;
