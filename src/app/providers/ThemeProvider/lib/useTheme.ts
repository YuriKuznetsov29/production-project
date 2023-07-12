import { Theme, ThemeContext } from "./ThemeContext"
import { useContext } from 'react'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return {theme, toggleTheme}
}