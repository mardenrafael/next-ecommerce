import { PropsWithChildren, createContext, useState } from "react";

export enum ThemeOptions {
  light = "light",
  dark = "dark",
}

export interface Theme {
  theme: ThemeOptions;
  toggleTheme: () => void;
}

export interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeContext = createContext<Theme>({
  theme: ThemeOptions.light,
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element | null {
  const [theme, setTheme] = useState<ThemeOptions>(ThemeOptions.light);

  function toggleTheme(): void {
    const newTheme =
      theme === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
