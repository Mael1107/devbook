import Link from "next/link"

const NotFound = () => {
    return (
        <main className="flex flex-col items-center m-auto">
            <h1 className="text-5xl font-bold">404</h1>
            <h2 className="text-3xl">Page nout found!</h2>
            <Link className="hover:text-zinc-400 transition-colors mt-5" href="/">
                ⬅️ Back to Home
            </Link>
        </main>
    )
}

export default NotFound