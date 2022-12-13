import { useMemo } from "react";

import type { Pokemon } from "..";
import { usePokedexContext } from "../PokedexContext";

const usePokemonCapture = ({ id }: Pokemon) => {
  const { addPokemon, removePokemon, isPokemon } = usePokedexContext();

  const isCaptured = useMemo(() => isPokemon(id), [id, isPokemon]);

  const handleCapture = () => {
    if (isCaptured) {
      removePokemon(id);
    } else {
      addPokemon(id);
    }
  };

  return {
    isCaptured,
    handleCapture,
  };
};

export default usePokemonCapture;
