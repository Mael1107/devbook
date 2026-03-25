import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const getBook = async (id: string) => {
    console.log("ID recebido:", id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/works/${id}.json`)
    const data = await response.json()
    // Descrição pode ser string ou objeto — trata os dois casos:
    const rawDescription = data.description
    const description = typeof rawDescription === "string"
        ? rawDescription
        : rawDescription?.value ?? "Unavailable description"

    // Pega só o primeiro parágrafo (antes de qualquer "----------")
    const cleanDescription = description.split("----------")[0].trim()

    // Capa vem como array de números
    const coverUrl = data.covers?.[0]
        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
        : null

    return {
        title: data.title,
        description: cleanDescription,
        coverUrl,
        subjects: data.subjects?.slice(0, 5) ?? [] // primeiros 5 temas
    }
}

interface PageProps {
    params: Promise<{ id: string }>
}

export const generateMetadata = async ({params}: PageProps) => {
    const {id} = await params
    const book = await getBook(id)
    return {
        title: `${book.title} | DevBook`,
        description: book.description
    }
}

const BookPage = async ({params}: PageProps) => {
    const {id} = await params
    const book = await getBook(id)


    if (!book.title) {
        notFound()
    }
    return (
    <main className="mx-auto max-w-3xl px-4 py-8 flex flex-col gap-4">  
        {book.coverUrl && (
        <div className="relative w-50 h-70">
            <Image
                src={book.coverUrl}
                alt={`Capa de ${book.title}`}
                fill
                className="rounded-lg"
            />
        </div>
        )}
        <h1 className="font-bold text-2xl dark:text-zinc-100" >{book.title}</h1>
        <p className="text-zinc-300 dark:text-zinc-400">{book.description}</p>
        <Link className="text-sm hover:text-zinc-400 transition-colors" href="/">
        ← Back
        </Link>
    </main>
    )
    
}

export default BookPage