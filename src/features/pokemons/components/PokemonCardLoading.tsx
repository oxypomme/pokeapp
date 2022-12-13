import { useState } from "react";
import { Rings } from "react-loader-spinner";
import classNames from "classnames";

import classes from "./PokemonCard.module.scss";

const PokemonCardLoading = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(classes.card, { [classes.hovered]: isHovered })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Rings color="#fff" wrapperClass={classes.img} />
      <div className={classes.name}>Loading</div>
      <ul className={classes.types}>
        <li>...</li>
      </ul>
      <button disabled className={classes.detailBtn}>
        Details
      </button>
    </div>
  );
};

export default PokemonCardLoading;
