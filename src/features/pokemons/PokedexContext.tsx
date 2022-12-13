import { createContext, useContext, useState } from "react";

import type { Pokemon } from ".";

type PokedexProviderValue = {
  addPokemon: (id: Pokemon["id"]) => void;
  removePokemon: (id: Pokemon["id"]) => void;
  isPokemon: (id: Pokemon["id"]) => boolean;
  readonly pokemonIds: Pokemon["id"][];
};
type ProviderProps = React.PropsWithChildren;

export const PokedexContext = createContext<PokedexProviderValue | undefined>(
  undefined
);

export const PokedexProvider = ({ children }: ProviderProps) => {
  const [pokemonIds, setPokemonIds] = useState<Pokemon["id"][]>([]);

  const contextValue: PokedexProviderValue = {
    get pokemonIds() {
      return pokemonIds;
    },

    addPokemon: (id) => {
      setPokemonIds([...pokemonIds, id]);
    },

    removePokemon: (id) => {
      setPokemonIds(pokemonIds.filter((v) => v !== id));
    },

    isPokemon: (id) => {
      return pokemonIds.includes(id);
    },
  };

  return (
    <PokedexContext.Provider value={contextValue}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = () => {
  const context = useContext(PokedexContext);
  if (!context)
    throw new Error(
      "usePokedexContext must be called within a PokedexProvider"
    );
  return context;
};
