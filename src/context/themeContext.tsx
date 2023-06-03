import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

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
    const location = window.location;

    localStorage.setItem(
      location.hostname + ".user.preferred.theme",
      JSON.stringify({ theme: newTheme })
    );
    setTheme(newTheme);
  }

  useEffect(() => {
    const location = window.location;

    const userPreferredTheme = localStorage.getItem(
      location.hostname + ".user.preferred.theme"
    );

    if (userPreferredTheme) {
      setTheme(JSON.parse(userPreferredTheme).theme);
    }
  }, []);

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
