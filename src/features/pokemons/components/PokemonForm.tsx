import { useState } from "react";
import PropTypes from "prop-types";

import InputControl from "@/components/InputControl";

import classes from "./PokemonForm.module.scss";

type Payload = {
  name: string;
  type: string;
  height?: number;
  weight?: number;
};

type Props = React.PropsWithoutRef<{
  onSubmit(payload: Payload): void;
}>;

const PokemonForm = ({ onSubmit }: Props): JSX.Element => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const isValid = name && type;

  const onBaseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      name,
      type,
      height,
      weight,
    });
  };

  return (
    <form className={classes.form} onSubmit={onBaseSubmit}>
      <InputControl
        required
        label="Name"
        placeholder="Pikachu"
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <InputControl
        required
        label="Type"
        placeholder="electric"
        type="text"
        value={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setType(e.target.value)
        }
      />
      <InputControl
        label="Height"
        type="number"
        value={height}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHeight(+e.target.value)
        }
      />
      <InputControl
        label="Weight"
        type="number"
        value={weight}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWeight(+e.target.value)
        }
      />
      <button disabled={!isValid}>Create</button>
    </form>
  );
};
PokemonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PokemonForm;
