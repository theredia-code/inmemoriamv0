"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Biography() {
  return (
    <section id="biografia" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
            Su Historia
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/young.jpg"
                  alt="Elena en su juventud"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4 italic">
                Elena el día de su boda, 1972
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-foreground/80 leading-relaxed">
                Elena María Fernández nació el 15 de marzo de 1948 en la hermosa ciudad de Guadalajara, México. Fue la segunda de cuatro hermanos en una familia llena de amor y tradiciones.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Desde pequeña, Elena mostró una pasión inigualable por la cocina y el jardín, heredando de su abuela los secretos de las recetas familiares que después transmitiría a sus propios nietos.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Se graduó como maestra de primaria en 1970 y dedicó más de 35 años a la educación, tocando las vidas de miles de niños que aún la recuerdan con cariño.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                En 1972, contrajo matrimonio con Roberto Hernández, con quien compartió 50 años de amor incondicional. Juntos criaron a tres hijos: María, Carlos y Patricia, y fueron bendecidos con siete nietos que fueron la luz de sus ojos.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
