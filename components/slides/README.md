# Slide Thumbnail Navigator

## Usage

1. **Generate slide preview images** in your e2b sandbox and place them in `/public/slides/` (e.g., `slide-1.png`, `slide-2.png`, ...).
2. **Generate a manifest file** (`/public/slides/manifest.json`) containing an array of slide image URLs, e.g.:

```json
["/slides/slide-1.png", "/slides/slide-2.png", "/slides/slide-3.png"]
```

3. **Load the manifest in your page/component:**

```tsx
import { SlideThumbnailNavigator } from './SlideThumbnailNavigator'
import { loadSlideManifest } from './manifest-loader'
import { useEffect, useState } from 'react'

export default function MySlidesPage() {
  const [slides, setSlides] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    loadSlideManifest().then(setSlides)
  }, [])

  return (
    <>
      {/* Your main slide content here, using slides[activeIndex] */}
      <SlideThumbnailNavigator
        slides={slides}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </>
  )
}
```

## e2b Sandbox Integration

- During slide generation, output both the images and the manifest file to `/public/slides/`.
- The Next.js app will automatically pick up the manifest and render the navigator.

## Notes

- The navigator is fully controlled: you manage the active index and slide content in your page/component.
- Thumbnails are 16:9, small, and styled with Tailwind.
