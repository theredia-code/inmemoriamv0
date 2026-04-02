"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <p className="font-serif text-2xl md:text-3xl mb-2">
              Elena María Fernández
            </p>
            <p className="text-primary-foreground/70">
              1948 — 2024
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <p className="text-primary-foreground/80 italic leading-relaxed">
              {'"No estoy lejos, solo al otro lado del camino. Séquense las lágrimas y no lloren si me aman. Su sonrisa es mi paz."'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-px bg-primary-foreground/30" />
            <Heart className="w-5 h-5 text-accent" />
            <div className="w-12 h-px bg-primary-foreground/30" />
          </div>

          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>
              Servicio conmemorativo celebrado el 12 de Enero, 2024
            </p>
            <p>
              Parroquia de Nuestra Señora de Guadalupe, Guadalajara
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/40">
              Sitio creado con amor por la familia Fernández Hernández
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
