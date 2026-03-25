import BookCard from "./components/BookCard";
import SearchInput from "./components/SearchInput";
import { Book } from "@/types";

const getBooks = async (query: string): Promise<Book[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.json?q=${query}&limit=6`)
  const data = await response.json()

  return data.docs.map((item: any) => ({
    id: item.key.replace("/works/", ""),
    title: item.title,
    author: item.author_name?.[0] ?? "Unknown author",
    description: item.first_sentence?.[0] ?? "Unavailable description",
    cover_url: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : undefined,
    year: item.first_publish_year
  }))
}

interface HomeProps {
  searchParams: Promise<{ q?: string}>
}

const Home = async ({searchParams}: HomeProps) => {
  const {q} = await searchParams
  const query = q ?? "javascript"
  const books = await getBooks(query)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-800 mb-2">📚 DevBook</h1>
      <p className="text-zinc-500 mb-8">Books for devs</p>
      <div className="mb-8">
        <SearchInput placeholder="Search books..."/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  )
}

export default Home