/* eslint-disable indent */
import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme: Theme

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
                break
        }

        setTheme?.(newTheme)
        // document.body.className = newTheme лучше было напрямую вешать глобальный класс с темой на body
        localStorage.setItem('theme', newTheme)
    }

    return { theme: theme || Theme.LIGHT, toggleTheme }
}
