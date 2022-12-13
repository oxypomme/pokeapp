import type { Pokemon } from "..";
import PokemonRow from "./PokemonRow";
import PokemonRowLoading from "./PokemonRowLoading";

type Props = React.PropsWithoutRef<{
  pokemons?: Pokemon[];
  loadingItems?: number;
}>;

const PokemonTable = ({ pokemons, loadingItems }: Props): JSX.Element => (
  <table
    style={{
      tableLayout: "fixed",
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "1rem",
    }}
  >
    <thead>
      <tr style={{ height: "52px" }}>
        <th>Image</th>
        <th>Name</th>
        <th>Types</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* Pokemon List */}
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonRow key={pokemon.id} pokemon={pokemon} />
        ))}
      {/* Loading state */}
      {loadingItems &&
        new Array(loadingItems)
          .fill(0)
          .map((_, i) => <PokemonRowLoading key={i} />)}
    </tbody>
  </table>
);

export default PokemonTable;
