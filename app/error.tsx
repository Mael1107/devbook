"use client"
import Link from "next/link"

interface ErrorProps {
    error: Error
    reset: () => void
}

const Error = ({error, reset}: ErrorProps) => {
    return (
        <main className="flex flex-col mx-auto">
            <p className="text-2xl">❌Error! Please try again later!</p>
            <button className="text-xl" onClick={reset}>Try Again now</button>
            <Link className="text-xl" href="/">⬅️Back To Home</Link>
        </main>
    )
}

export default Error