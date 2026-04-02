"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

export function VideoTribute() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Video Conmemorativo
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un recorrido visual por los momentos más especiales de su vida
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-foreground/5">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Placeholder background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary" />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-accent ml-1" />
                    </div>
                    <p className="text-foreground font-medium">Click para reproducir</p>
                    <p className="text-muted-foreground text-sm mt-1">Duración: 5:32</p>
                  </div>
                </div>

                {/* Floating photos preview */}
                <div className="absolute top-6 left-6 w-16 h-16 md:w-24 md:h-24 rounded-lg bg-card shadow-lg opacity-60 rotate-[-6deg]" />
                <div className="absolute bottom-6 right-6 w-16 h-16 md:w-24 md:h-24 rounded-lg bg-card shadow-lg opacity-60 rotate-[6deg]" />
                <div className="absolute top-1/4 right-10 w-12 h-12 md:w-20 md:h-20 rounded-lg bg-card shadow-lg opacity-40 rotate-[12deg]" />
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video conmemorativo de Elena María Fernández"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-6 italic">
            Este video fue creado con amor por su familia para honrar su memoria
          </p>
        </motion.div>
      </div>
    </section>
  )
}
