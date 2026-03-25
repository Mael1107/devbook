export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8 animate-pulse">
      
      {/* Placeholder da capa */}
      <div className="w-[200px] h-[280px] bg-zinc-700 rounded-lg mb-4" />
      
      {/* Placeholder do título */}
      <div className="h-8 bg-zinc-700 rounded w-64 mb-2" />
      
      {/* Placeholder da descrição */}
      <div className="h-4 bg-zinc-800 rounded w-full mb-2" />
      <div className="h-4 bg-zinc-800 rounded w-full mb-2" />
      <div className="h-4 bg-zinc-800 rounded w-3/4" />
    </main>
  )
}