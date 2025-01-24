import { createContext, ReactElement, useContext, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}
const intialState = {
    theme: "dark",
    toggleTheme: () => {},
}
const ThemeContext = createContext<ThemeContextType>(intialState)

export function ThemeContextProvider({ children }: { children: ReactElement }) {
    const [theme, setTheme] = useLocalStorage("theme")
    function toggleTheme() {
        if (theme === "dark") setTheme("light")
        else setTheme("dark")
    }
    useEffect(() => {
        const root = window.document.documentElement
        if (theme) {
            root.classList.toggle("dark", theme === "dark")
            root.classList.toggle("light", theme === "light")
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const themeContext = useContext(ThemeContext)
    if (!themeContext)
        throw new Error("Cannot use theme context outside of it's provider")
    return themeContext
}
