const SkeletonCard = () => (
    <div className="flex flex-col gap-2 bg-zinc-700 p-4 rounded-lg animate-pulse">
        <div className="w-30 h-40 bg-zinc-500 rounded" />
        <div className="h-6 bg-zinc-500 rounded w-3/4" />
        <div className="h-4 bg-zinc-600 rounded w-1/2" />
        <div className="h-4 bg-zinc-600 rounded w-full" />
        <div className="h-4 bg-zinc-600 rounded w-2/3" />
    </div>
)

const Loading = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="h-9 bg-zinc-700 rounded w-48 mb-2 animate-pulse" />
            <div className="h-5 bg-zinc-800 rounded w-32 mb-8 animate-pulse" />
            
            {/* Array de 6 posições — renderiza 6 skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    )
}

export default Loading