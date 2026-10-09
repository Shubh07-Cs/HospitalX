import { useEffect, useRef, useState } from 'react'
import { Building2, ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Container } from '../components/ui/container.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section } from '../components/ui/section.jsx'
import { gallery } from '../data/gallery.js'
import { hospital } from '../data/hospital.js'

const previewTiles = [
  { id: 'gallery-facilities', category: 'Facilities', label: 'Hospital facilities' },
  { id: 'gallery-care', category: 'Care spaces', label: 'Care environment' },
  { id: 'gallery-team', category: 'People', label: 'Hospital team' },
  { id: 'gallery-community', category: 'Community', label: 'Community care' },
]

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const dialogRef = useRef(null)
  const actualImages = gallery.images
  const categories = ['All', ...new Set(actualImages.map((image) => image.category))]
  const filteredImages =
    activeCategory === 'All'
      ? actualImages
      : actualImages.filter((image) => image.category === activeCategory)

  useEffect(() => {
    document.title = `Gallery | ${hospital.name}`
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (activeImage && dialog && !dialog.open) dialog.showModal()
    if (!activeImage && dialog?.open) dialog.close()
  }, [activeImage])

  function showNextImage(direction) {
    const currentIndex = filteredImages.findIndex((image) => image.id === activeImage?.id)
    if (currentIndex < 0 || filteredImages.length < 2) return
    const nextIndex = (currentIndex + direction + filteredImages.length) % filteredImages.length
    setActiveImage(filteredImages[nextIndex])
  }

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Gallery' }]}
        eyebrow="Hospital gallery"
        title="A closer look"
        description="Approved hospital photographs will be added here when provided. The panels below are illustrative placeholders, not photographs of Avdhuth Hospital."
      />
      <Section>
        <Container>
          {actualImages.length > 0 ? (
            <>
              <div className="mb-7 flex flex-wrap gap-2" aria-label="Gallery categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    className={`min-h-10 rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      activeCategory === category
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-white text-foreground hover:bg-medical-page'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    className="group overflow-hidden rounded-lg border border-border bg-white text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => setActiveImage(image)}
                    aria-label={`Open image: ${image.title}`}
                  >
                    {image.image ? (
                      <img
                        src={image.image}
                        alt={image.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.02]"
                      />
                    ) : (
                      <PlaceholderTile label={image.title} />
                    )}
                    <span className="block p-4">
                      <span className="block text-xs font-medium text-muted-foreground">
                        {image.category}
                      </span>
                      <span className="mt-1 block font-semibold">{image.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="mb-5 flex items-center gap-2">
                <ImageIcon aria-hidden="true" className="size-5 text-primary" />
                <p className="text-sm font-medium">
                  Gallery layout preview · no hospital photographs supplied
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {previewTiles.map((tile) => (
                  <div
                    key={tile.id}
                    className="overflow-hidden rounded-lg border border-border bg-white"
                  >
                    <PlaceholderTile label={tile.label} />
                    <div className="p-4">
                      <Badge variant="outline">{tile.category}</Badge>
                      <p className="mt-2 text-sm font-semibold">{tile.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Image pending hospital approval
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <EmptyState
                className="mt-6"
                title="Real hospital images are needed"
                description="The sample tiles are not real facility images. Replace them with photographs supplied and approved by the hospital."
              />
            </>
          )}
        </Container>
      </Section>

      <dialog
        ref={dialogRef}
        aria-label={activeImage?.title ?? 'Gallery image'}
        className="m-auto max-h-[90dvh] w-[min(92vw,64rem)] max-w-none overflow-hidden rounded-xl border border-border bg-white p-0 shadow-xl backdrop:bg-black/70"
        onClose={() => setActiveImage(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close()
        }}
      >
        {activeImage && (
          <div className="relative">
            <button
              type="button"
              aria-label="Close image viewer"
              className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-white text-foreground shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => dialogRef.current?.close()}
            >
              <X aria-hidden="true" className="size-5" />
            </button>
            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => showNextImage(-1)}
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => showNextImage(1)}
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                </button>
              </>
            )}
            {activeImage.image ? (
              <img
                src={activeImage.image}
                alt={activeImage.alt}
                className="max-h-[76dvh] w-full object-contain"
              />
            ) : (
              <PlaceholderTile label={activeImage.title} large />
            )}
            <div className="p-4 sm:p-6">
              <p className="text-xs font-medium text-muted-foreground">{activeImage.category}</p>
              <h2 className="mt-1 text-lg font-semibold">{activeImage.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {activeImage.contentStatus === 'sample'
                  ? 'Illustrative placeholder — not a hospital photograph.'
                  : activeImage.alt}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

function PlaceholderTile({ label, large = false }) {
  return (
    <div
      role="img"
      aria-label={`Illustrative placeholder for ${label}`}
      className={`flex items-center justify-center bg-gradient-to-br from-medical-primary-light via-medical-accent-light to-medical-soft text-primary ${
        large ? 'min-h-[50vh]' : 'aspect-[4/3]'
      }`}
    >
      <div className="flex flex-col items-center gap-3 rounded-lg border border-white/80 bg-white/80 px-6 py-5 text-center shadow-sm">
        <Building2 aria-hidden="true" className="size-8" />
        <span className="text-sm font-semibold">{label}</span>
        <span className="text-xs text-muted-foreground">Illustrative placeholder</span>
      </div>
    </div>
  )
}

export { GalleryPage }
