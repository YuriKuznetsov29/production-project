import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        // document.body.className = newTheme лучше было напрямую вешать глобальный класс с темой на body
        localStorage.setItem('theme', newTheme)
    }

    return { theme, toggleTheme }
}
