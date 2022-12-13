import { usePokedexContext } from "../PokedexContext";

const PokemonCollectionCount = (): JSX.Element => {
  const { pokemonIds } = usePokedexContext();

  return <span>{pokemonIds.length}</span>;
};

export default PokemonCollectionCount;
