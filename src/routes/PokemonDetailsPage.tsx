import { useParams } from "react-router-dom";

import PokemonDetails from "@/features/pokemons/components/PokemonDetails";
import useFetch from "@/hooks/useFetch";

import type { Pokemon } from "../features/pokemons";

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
      {isLoading && "Loading..."}
      {error && `Error: ${error.message}`}
    </>
  );
};

export default PokemonDetailsPage;
