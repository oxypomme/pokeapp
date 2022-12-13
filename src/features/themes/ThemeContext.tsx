import { createContext, useContext, useMemo, useState } from "react";

import darkTheme from "./dark.json";
import lightTheme from "./light.json";

import classes from "./theme.module.scss";

type Themes = "light" | "dark";
type ThemeDefinition = typeof darkTheme | typeof lightTheme;

type ThemeProviderValue = {
  setTheme: (theme: Themes) => void;
  readonly current: Themes;
  readonly theme: ThemeDefinition;
};
type ProviderProps = React.PropsWithChildren<{
  defaultTheme?: Themes;
  onlyVars?: boolean;
}>;

export const ThemeContext = createContext<ThemeProviderValue | undefined>(
  undefined
);

const parseCSSVars = (obj: object, keyPrefix = "--") => {
  let res: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      res = {
        ...res,
        ...parseCSSVars(value, keyPrefix + key + "-"),
      };
    } else {
      res[keyPrefix + key] = value;
    }
  }

  return res;
};

export const ThemeProvider = ({
  children,
  defaultTheme = "dark",
}: ProviderProps) => {
  const [current, setCurrent] = useState<Themes>(defaultTheme);

  const contextValue: ThemeProviderValue = {
    setTheme: (theme) => setCurrent(theme),
    get current() {
      return current;
    },
    get theme() {
      switch (current) {
        case "light":
          return lightTheme;

        default:
          return darkTheme;
      }
    },
  };

  const style = useMemo(
    () => parseCSSVars(contextValue.theme),
    [contextValue.theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={style} className={classes.themeRoot}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be called within a ThemeProvider");
  return context;
};
