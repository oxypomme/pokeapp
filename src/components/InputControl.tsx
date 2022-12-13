import { useMemo } from "react";

import classes from "./InputControl.module.scss";

type Props = {
  label: string;
} & React.InputHTMLAttributes<unknown>;

const RequiredStar = (): JSX.Element => <span style={{ color: "red" }}>*</span>;

const InputControl = ({ label, id, ...inputProps }: Props): JSX.Element => {
  const inputId = useMemo(() => id ?? label.toLowerCase(), [id, label]);

  return (
    <div className={classes.container}>
      <span>
        <label htmlFor={inputId}>{label}</label>
        {inputProps.required && <RequiredStar />}
      </span>
      <input id={inputId} {...inputProps} />
    </div>
  );
};

export default InputControl;
