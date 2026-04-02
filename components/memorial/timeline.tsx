"use client"

import { motion } from "framer-motion"

const events = [
  {
    year: "1948",
    title: "Nacimiento",
    description: "Elena nace en Guadalajara, México, en el seno de una familia amorosa."
  },
  {
    year: "1970",
    title: "Graduación",
    description: "Se gradúa como maestra de educación primaria, comenzando su vocación de servicio."
  },
  {
    year: "1972",
    title: "Matrimonio",
    description: "Contrae matrimonio con Roberto Hernández, el amor de su vida."
  },
  {
    year: "1974",
    title: "Primera hija",
    description: "Nace María, su primera hija, llenando el hogar de alegría."
  },
  {
    year: "1977",
    title: "Segundo hijo",
    description: "Nace Carlos, trayendo más felicidad a la familia."
  },
  {
    year: "1980",
    title: "Tercera hija",
    description: "Nace Patricia, completando la familia."
  },
  {
    year: "2005",
    title: "Jubilación",
    description: "Se retira de la docencia después de 35 años de servicio dedicado."
  },
  {
    year: "2022",
    title: "Bodas de Oro",
    description: "Celebra 50 años de matrimonio rodeada de toda su familia."
  },
  {
    year: "2024",
    title: "Partida",
    description: "Descansa en paz, dejando un legado de amor y bondad."
  }
]

export function Timeline() {
  return (
    <section id="linea-de-vida" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Momentos de su Vida
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <span className="text-accent font-medium text-lg">{event.year}</span>
                  <h3 className="font-serif text-xl text-foreground mt-1 mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full md:-translate-x-1.5 border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
