import { Rings } from "react-loader-spinner";

import classes from "./PokemonDetails.module.scss";

const PokemonDetailsLoading = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.image}>
          <Rings color="#fff" />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>Loading</div>
          <div className={classes.types}>...</div>
          {/* <div>{format(pokemon.weight * 0.1)} kg</div> */}
          {/* <div>{format(pokemon.height * 0.1)} m</div> */}
        </div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default PokemonDetailsLoading;
