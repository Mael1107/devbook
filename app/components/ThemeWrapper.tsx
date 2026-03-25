"use client"
import { useTheme } from "../contexts/ThemeContext"
import { useEffect } from "react"

const ThemeWrapper = () => {
  const { theme } = useTheme()

  useEffect(() => {
    // Adiciona ou remove a classe "dark" do <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]) // roda toda vez que theme mudar

  return null // não renderiza nada visível
}

export default ThemeWrapper