import { usePokedexContext } from "../PokedexContext";

const PokemonCollectionCount = (): JSX.Element => {
  const { pokemonIds } = usePokedexContext();

  return <>{pokemonIds.length}</>;
};

export default PokemonCollectionCount;
