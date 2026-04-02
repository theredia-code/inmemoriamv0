"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const photos = [
  {
    src: "/images/portrait.jpg",
    alt: "Elena en su retrato más reciente",
    caption: "Su última fotografía oficial, 2023"
  },
  {
    src: "/images/family.jpg",
    alt: "Elena con su familia",
    caption: "Reunión familiar en Navidad, 2022"
  },
  {
    src: "/images/garden.jpg",
    alt: "Elena en su jardín",
    caption: "En su amado jardín de rosas"
  },
  {
    src: "/images/young.jpg",
    alt: "Elena joven",
    caption: "El día de su boda, 1972"
  },
  {
    src: "/images/travel.jpg",
    alt: "Elena viajando",
    caption: "Viaje a París con Roberto, 2010"
  },
  {
    src: "/images/cooking.jpg",
    alt: "Elena cocinando",
    caption: "Enseñando recetas a sus nietos"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null)

  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Galería de Recuerdos
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Momentos capturados que guardaremos por siempre en nuestros corazones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-card hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-card mt-4 text-lg">{selectedImage.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
