import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import classes from "./Paginator.module.scss";

type Props = React.PropsWithoutRef<{
  current: number;
  count: number;
  onChange: (value: number) => void;
}>;

const Paginator = ({ current, count, onChange }: Props): JSX.Element => {
  const safeOnChange = useCallback(
    (value: number) =>
      value > 0 && value <= count ? onChange(value) : undefined,
    [count, onChange]
  );

  const buttons = useMemo(() => {
    const res: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
      if (
        i === 0 ||
        i === count - 1 ||
        (i >= current - 3 && i <= current + 1)
      ) {
        res.push(
          <button
            key={i}
            style={{ color: i + 1 === current ? "#007DFF" : undefined }}
            onClick={() => safeOnChange(i + 1)}
          >
            {i + 1}
          </button>
        );
      } else if (i === current - 4 || i === current + 2) {
        res.push(<span key={i}>...</span>);
      }
    }

    return res;
  }, [count, current, safeOnChange]);

  return (
    <div className={classes.container}>
      <button onClick={() => safeOnChange(current - 1)}> {"<"} </button>
      <div className={classes.pages}>{buttons}</div>
      <button onClick={() => safeOnChange(current + 1)}> {">"} </button>
    </div>
  );
};
Paginator.propTypes = {
  current: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Paginator;
