import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export enum ThemeOptions {
  light = "light",
  dark = "dark",
}

export interface Theme {
  theme: ThemeOptions;
  setTheme: (value: SetStateAction<ThemeOptions | undefined>) => void;
}

export interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeContext = createContext<Theme>({
  theme: ThemeOptions.light,
  setTheme: () => {},
});

export default function ThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<ThemeOptions>();

  return (
    <ThemeContext.Provider
      value={{
        theme: theme ?? ThemeOptions.light,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
