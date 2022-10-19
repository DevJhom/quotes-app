import React, { createContext, useState } from "react";

const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

//the Theme Provider
export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  const toggleThemeHandler = (value) => {
    if (value === "dark") setTheme("light");
    else if (value === "light") setTheme("dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
