import { useMemo } from "react";
import PropTypes from "prop-types";

import type { PokemonType } from "..";

import classes from "./PokemonTypeChip.module.scss";

type Props = {
  type: PokemonType;
};

const PokemonTypeChip = ({ type }: Props) => {
  const color = useMemo(() => {
    switch (type) {
      case "bug":
        return "#92a212";

      case "dark":
        return "#4f3f3d";

      case "dragon":
        return "#4f60e2";

      case "electric":
        return "#fac100";

      case "fairy":
        return "#ef71f0";

      case "fighting":
        return "#ff8100";

      case "fire":
        return "#e72324";

      case "flying":
        return "#82baf0";

      case "ghost":
        return "#713f71";

      case "grass":
        return "#3da224";

      case "ground":
        return "#92501b";

      case "ice":
        return "#3dd9ff";

      case "normal":
        return "#a0a2a0";

      case "poison":
        return "#923fcc";

      case "psychic":
        return "#ef3f7a";

      case "rock":
        return "#b0ab82";

      case "steel":
        return "#60a2b9";

      case "water":
        return "#2481f0";

      default:
        return "#67998c";
    }
  }, [type]);
  const icon = useMemo(
    () =>
      `https://duiker101.github.io/pokemon-type-svg-icons/icons/${type}.svg`,
    [type]
  );

  return (
    <div className={classes.chip} style={{ background: color }}>
      <img src={icon} alt={type} height="16" />
      {type}
    </div>
  );
};
PokemonTypeChip.propTypes = { type: PropTypes.string.isRequired };

export default PokemonTypeChip;
