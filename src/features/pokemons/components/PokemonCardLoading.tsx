import { Rings } from "react-loader-spinner";

import classes from "./PokemonCard.module.scss";

const PokemonCardLoading = (): JSX.Element => (
  <div className={classes.card}>
    <Rings color="#fff" wrapperClass={classes.img} />
    <div className={classes.name}>Loading</div>
    <ul className={classes.types}>
      <li>...</li>
    </ul>
    <div className={classes.actions}>
      <button disabled>Details</button>
      <button disabled>Capture</button>
    </div>
  </div>
);

export default PokemonCardLoading;
