import Image from "next/image" 
import { Book } from "@/types"
import Link from "next/link"

interface BookCardProps {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link href={`/books/${book.id}`}>
        <div className="flex flex-col gap-2 bg-zinc-500 p-4 rounded-lg dark:bg-zinc-800">
        
          {/* Imagem de capa — só renderiza se existir */}
          {book.cover_url && (
            <Image
              src={book.cover_url}
              alt={`Capa do livro ${book.title}`}
              width={120}
              height={160}
              className="rounded"
            />
          )}
          <h2 className="text-xl font-bold text-gray-100">{book.title}</h2>
        
          {/* Autor + ano na mesma linha */}
          <p className="text-sm text-zinc-400">
            {book.author}
            {book.year && ` • ${book.year}`}  {/* ← concatena só se existir */}
          </p>
          <p className="text-sm text-zinc-300">{book.description}</p>
        </div>
    </Link>
  )
}

export default BookCard