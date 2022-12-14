import { useEffect, useState } from "react";

import type { Pokemon } from "..";
import PokemonList from "../components/PokemonList";
import { usePokedexContext } from "../PokedexContext";

const PokemonCapturedPage = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loadingItems, setLoadingItems] = useState<number | undefined>(
    undefined
  );

  const { pokemonIds } = usePokedexContext();

  useEffect(() => {
    const handler = async () => {
      try {
        const currIds = pokemons.map(({ id }) => id);

        if (currIds.length > pokemonIds.length) {
          // If deletion
          const idsToDelete = currIds.filter((id) => !pokemonIds.includes(id));
          setPokemons(pokemons.filter(({ id }) => !idsToDelete.includes(id)));
        }

        if (currIds.length < pokemonIds.length) {
          // If addition
          const idsToAdd = pokemonIds.filter((id) => !currIds.includes(id));
          setLoadingItems(idsToAdd.length);

          const pokes = await Promise.all(
            idsToAdd.map(async (id) => {
              const res = await fetch(
                `https://pokeapi.fly.dev/oxypomme1222/pokemons/${id}`
              );
              return res.json() as Promise<Pokemon>;
            })
          );

          setPokemons([...pokemons, ...pokes]);
        }
      } catch (error) {
        setError(error as Error);
      }
      setLoadingItems(undefined);
    };
    handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonIds]);

  return (
    <>
      {!error ? (
        <PokemonList pokemons={pokemons} loadingItems={loadingItems} />
      ) : (
        "Error: " + error.message
      )}
    </>
  );
};

export default PokemonCapturedPage;
