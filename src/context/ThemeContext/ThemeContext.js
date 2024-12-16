import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const LOCALSTORAGE_KEY = "themes-key";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCALSTORAGE_KEY) || "light",
  );

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem(LOCALSTORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export { ThemeProvider };
