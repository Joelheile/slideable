export async function loadSlideManifest(): Promise<string[]> {
  const res = await fetch('/slides/manifest.json')
  if (!res.ok) throw new Error('Failed to load slide manifest')
  return res.json()
} 