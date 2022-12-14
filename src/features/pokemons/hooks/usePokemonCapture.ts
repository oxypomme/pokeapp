import { useCallback } from "react";

import type { Pokemon } from "..";
import { usePokedexContext } from "../PokedexContext";

const usePokemonCapture = ({ id }: Pokemon) => {
  const { addPokemon, removePokemon, isPokemon } = usePokedexContext();

  const isCaptured = isPokemon(id);

  const handleCapture = useCallback(() => {
    if (isCaptured) {
      removePokemon(id);
    } else {
      addPokemon(id);
    }
  }, [id, isCaptured, addPokemon, removePokemon]);

  return {
    isCaptured,
    handleCapture,
  };
};

export default usePokemonCapture;
