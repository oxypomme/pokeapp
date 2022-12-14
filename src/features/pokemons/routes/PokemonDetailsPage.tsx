import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";

import type { Pokemon } from "..";
import PokemonDetails from "../components/PokemonDetails";
import PokemonDetailsLoading from "../components/PokemonDetailsLoading";

const PokemonDetailsPage = (): JSX.Element => {
  const { name: nameOrId } = useParams();

  const { data, isLoading, error } = useFetch<Pokemon>(
    `https://pokeapi.fly.dev/oxypomme1222/pokemons/${
      nameOrId?.toLowerCase() ?? "undefined"
    }`
  );

  return (
    <>
      {data && <PokemonDetails pokemon={data} />}
      {isLoading && <PokemonDetailsLoading />}
      {error && `Error: ${error.message}`}
    </>
  );
};

export default PokemonDetailsPage;
