"use client"
import Link from "next/link"
import { useTheme } from "../contexts/ThemeContext"

const NavBar = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <nav className="flex justify-between bg-zinc-800 text-white p-2 text-lg border-b border-zinc-700">
            <Link className="hover:text-gray-500 transition-colors" href="/">📚 DevBook</Link>
            <button
                onClick={toggleTheme}
                className="hover:text-zinc-400 transition-colors mr-3 px-3 hover:cursor-pointer border-2 border-zinc-600 hover:border-gray-400 rounded-lg"
            >
                {theme === "light" ? "dark" : "light"}
            </button>
        </nav>
    )
}

export default NavBar