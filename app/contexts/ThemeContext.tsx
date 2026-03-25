"use client"

import {createContext, useContext, useState, ReactNode} from "react"

interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>("light")
    
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useTheme deve ser usado dentro do ThemeProvider")
    }

    return context
}

export {ThemeProvider}