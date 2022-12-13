import { Rings } from "react-loader-spinner";

const PokemonRowLoading = (): JSX.Element => (
  <tr>
    <td>
      <Rings
        color="#fff"
        height={96}
        wrapperStyle={{ justifyContent: "center" }}
      />
    </td>
    <td>Loading</td>
    <td style={{ display: "flex", alignItems: "center" }}>...</td>
    <td>
      <button disabled>Details</button>
      <button disabled>Capture</button>
    </td>
  </tr>
);

export default PokemonRowLoading;
