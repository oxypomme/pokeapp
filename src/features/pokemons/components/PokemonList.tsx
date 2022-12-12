import { Pokemon } from "..";
import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";

const PokemonList = (): JSX.Element => (
  <ul
    style={{
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    }}
  >
    {(pokemons as Pokemon[]).map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </ul>
);

export default PokemonList;
