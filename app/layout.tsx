import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import NavBar from "./components/NavBar"
import { ThemeProvider } from "./contexts/ThemeContext"
import ThemeWrapper from "./components/ThemeWrapper"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

// SEO do projeto
export const metadata: Metadata = {
  title: "DevBook",
  description: "Catálogo de livros para desenvolvedores",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable}`}>
      {/* 
        min-h-screen = ocupa pelo menos 100vh
        flex flex-col = empilha: NavBar → conteúdo → footer
        bg-zinc-50 = fundo levemente cinza
        text-zinc-900 = cor padrão do texto
      */}
      <body className="min-h-screen flex flex-col bg-zinc-700 text-zinc-900 dark:bg-zinc-900">
        <ThemeProvider>
          <ThemeWrapper />
            <NavBar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}