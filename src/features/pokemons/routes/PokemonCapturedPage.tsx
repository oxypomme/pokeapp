import { useEffect } from "react";

import PokemonList from "../components/PokemonList";
import { useMultipleFetchPokemon } from "../hooks/query";
import { usePokedexContext } from "../PokedexContext";

const PokemonCapturedPage = (): JSX.Element => {
  const { pokemonIds } = usePokedexContext();

  const {
    data: pokemons,
    loadingCount,
    error,
    addQueries,
    removeQueries,
  } = useMultipleFetchPokemon();

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
