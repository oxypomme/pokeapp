import PropTypes from "prop-types";

import type { Pokemon } from "..";
import usePokemonCapture from "../hooks/usePokemonCapture";

type Props = React.PropsWithoutRef<{
  pokemon: Pokemon;
  className: string;
}>;

const PokemonCaptureButton = ({ pokemon, className }: Props): JSX.Element => {
  const { isCaptured, handleCapture } = usePokemonCapture(pokemon);

  return (
    <button className={className} onClick={handleCapture}>
      {isCaptured ? "Release" : "Capture"}
    </button>
  );
};
PokemonCaptureButton.propTypes = {
  pokemon: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default PokemonCaptureButton;
