"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SearchInputProps } from "@/types"

const SearchInput = ({placeholder}: SearchInputProps) => {
    const [inputText, setInputText] = useState<string>("")
    const router = useRouter()

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputText.trim() === "") return

        router.push(`/?q=${inputText}`)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
            type="text" 
            value={inputText}
            onChange={handleChange}
            placeholder={placeholder ?? "Fetch books..."}
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-sm outline-none focus:border-zinc-500"
            />
            <button 
                type="submit"
                className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors hover:cursor-pointer"
            >
                Search
            </button>
        </form>
    )
}

export default SearchInput