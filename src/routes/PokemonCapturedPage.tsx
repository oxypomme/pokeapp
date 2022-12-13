import { useEffect, useMemo, useState } from "react";

import PokemonList from "@/features/pokemons/components/PokemonList";
import { usePokedexContext } from "@/features/pokemons/PokedexContext";

import type { Pokemon } from "../features/pokemons";

const PokemonCapturedPage = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loadingItems, setLoadingItems] = useState<number | undefined>(
    undefined
  );

  const { pokemonIds } = usePokedexContext();

  const currIds = useMemo(() => pokemons.map(({ id }) => id), [pokemons]);

  useEffect(() => {
    const handler = async () => {
      try {
        const ids = pokemonIds.filter((id) => !currIds.includes(id));
        setLoadingItems(ids.length);

        const pokes = await Promise.all(
          ids.map(async (id) => {
            const res = await fetch(
              `https://pokeapi.fly.dev/oxypomme1222/pokemons/${id}`
            );
            return res.json() as Promise<Pokemon>;
          })
        );
        setPokemons(pokes);
      } catch (error) {
        setError(error as Error);
      }
      setLoadingItems(undefined);
    };
    handler();
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
