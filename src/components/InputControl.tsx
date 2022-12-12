import { useMemo } from "react";

import classes from "./InputControl.module.scss";

type Props = {
  label: string;
} & React.InputHTMLAttributes<unknown>;

const RequiredStar = (): JSX.Element => <span style={{ color: "red" }}>*</span>;

const InputControl = ({ label, ...inputProps }: Props): JSX.Element => {
  const name = useMemo(() => label.toLowerCase(), [label]);

  return (
    <div className={classes.container}>
      <label htmlFor={name}>
        {label}
        {inputProps.required && <RequiredStar />}
      </label>
      <input name={name} {...inputProps} />
    </div>
  );
};

export default InputControl;
