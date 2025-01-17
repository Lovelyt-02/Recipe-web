import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "Dark" : "light"));
        document.body.style.backgroundColor = theme == "light" ? "#121212" : "#fff";
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);