"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
        <div
          className={`w-full h-full transition-transform duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}`}
          onClick={toggleZoom}
        >
          <img src={images[currentImage] || "/placeholder.svg"} alt="Produit" className="w-full h-full object-cover" />
        </div>

        {/* Boutons de navigation */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Bouton de zoom */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
          onClick={toggleZoom}
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                currentImage === index ? "ring-2 ring-amber-700" : "ring-1 ring-gray-200"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Miniature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
