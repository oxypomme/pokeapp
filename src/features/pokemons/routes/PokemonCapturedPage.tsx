import { useEffect } from "react";

import useMultipleFetch from "@/hooks/useMultipleFetch";

import type { Pokemon } from "..";
import PokemonList from "../components/PokemonList";
import { usePokedexContext } from "../PokedexContext";

const PokemonCapturedPage = (): JSX.Element => {
  const { pokemonIds } = usePokedexContext();

  const {
    data: pokemons,
    loadingCount,
    error,
    addQueries,
    removeQueries,
  } = useMultipleFetch<Pokemon, string>(
    "pokemon-detail",
    (id) => `https://pokeapi.fly.dev/oxypomme1222/pokemons/${id}`
  );

  // Parse ids into queries
  useEffect(() => {
    const currIds = pokemons.map(({ id }) => id);

    if (currIds.length > pokemonIds.length) {
      // If deletion
      const idsToDelete = currIds
        .filter((id) => !pokemonIds.includes(id))
        .map((id) => id.toString());
      removeQueries(idsToDelete);
    }

    if (currIds.length < pokemonIds.length) {
      // If addition
      const idsToAdd = pokemonIds
        .filter((id) => !currIds.includes(id))
        .map((id) => id.toString());
      addQueries(idsToAdd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonIds]);

  return (
    <>
      {!error ? (
        <PokemonList
          pokemons={pokemons}
          loadingItems={loadingCount || undefined}
        />
      ) : (
        "Error: " + error.message
      )}
    </>
  );
};

export default PokemonCapturedPage;
