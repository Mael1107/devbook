export interface Book {
    id: string
    title: string
    author: string
    description: string
    cover_url?: string
    year?: number
}

export interface SearchInputProps {
    placeholder?: string
}