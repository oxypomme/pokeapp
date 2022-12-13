import { useCallback, useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import classes from "./Paginator.module.scss";

type Props = React.PropsWithoutRef<{
  current: number;
  count: number;
  onChange: (value: number) => void;
}>;

const Paginator = ({ current, count, onChange }: Props): JSX.Element => {
  const isMin = useMemo(() => current === 1, [current]);
  const isMax = useMemo(() => current === count, [current, count]);
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
            className={classNames({ [classes.current]: i + 1 === current })}
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
      <button disabled={isMin} onClick={() => safeOnChange(current - 1)}>
        {"<"}
      </button>
      <div className={classes.pages}>{buttons}</div>
      <button disabled={isMax} onClick={() => safeOnChange(current + 1)}>
        {">"}
      </button>
    </div>
  );
};
Paginator.propTypes = {
  current: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Paginator;
