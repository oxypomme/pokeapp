import React, { useMemo, useState } from "react";

import InputControl from "@/components/InputControl";

import classes from "./PokemonForm.module.scss";

const PokemonForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const isValid = useMemo(() => name && type, [name, type]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      type,
      height,
      weight,
    });
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
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

export default PokemonForm;
