interface SlideThumbnailNavigatorProps {
  slides: string[] // Array of slide image URLs
  activeIndex: number
  onSelect: (index: number) => void
}

export function SlideThumbnailNavigator({
  slides,
  activeIndex,
  onSelect,
}: SlideThumbnailNavigatorProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black/70 flex justify-center items-end py-2 z-50">
      <div className="flex gap-2 overflow-x-auto px-4">
        {slides.map((src, idx) => (
          <button
            key={src}
            onClick={() => onSelect(idx)}
            className={`relative rounded-md border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
              idx === activeIndex
                ? 'border-primary ring-2 ring-primary/60 shadow-lg'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            style={{ width: 64, height: 36 }} // 16:9 ratio, small thumbnail
            aria-label={`Go to slide ${idx + 1}`}
          >
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-md"
              draggable={false}
            />
            {idx === activeIndex && (
              <span className="absolute inset-0 rounded-md ring-2 ring-primary/80 pointer-events-none" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
