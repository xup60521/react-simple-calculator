import { createContext, useContext, useState } from "react";
import { unknown } from "zod";
import type { Theme } from "../type/theme";


const themeContext = createContext({
    theme: "blue" as Theme,
    setTheme: unknown as React.Dispatch<React.SetStateAction<Theme>>,
});

export default function ThemeProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("blue");
    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </themeContext.Provider>
    );
}

export const useTheme = () => useContext(themeContext).theme
export const useSetTheme = () => useContext(themeContext).setTheme