"use client"

import { motion } from "framer-motion"
import { Heart, Quote } from "lucide-react"

const tributes = [
  {
    name: "María Hernández",
    relation: "Hija",
    message: "Mamá, fuiste mi mejor amiga, mi consejera y mi ejemplo a seguir. Tu amor incondicional me guió en cada paso de mi vida. Te extrañaré cada día, pero sé que me cuidas desde el cielo."
  },
  {
    name: "Carlos Hernández",
    relation: "Hijo",
    message: "Gracias por enseñarme el valor del trabajo duro y la importancia de la familia. Tus abrazos y tu risa quedarán grabados en mi memoria para siempre. Te amo, mamá."
  },
  {
    name: "Patricia Hernández",
    relation: "Hija",
    message: "Mamá, heredé tu amor por la cocina y cada vez que preparo tu receta de pozole, siento que estás conmigo. Tu legado vive en cada uno de nosotros."
  },
  {
    name: "Sofía García",
    relation: "Nieta",
    message: "Abuelita Elena, gracias por las tardes de cuentos, los dulces escondidos y por enseñarme a bordar. Prometo seguir cuidando tu jardín de rosas."
  },
  {
    name: "Rosa López",
    relation: "Amiga de la infancia",
    message: "Elena y yo fuimos amigas por más de 60 años. Su bondad y generosidad no tenían límites. El mundo perdió a un ángel."
  },
  {
    name: "Prof. Miguel Torres",
    relation: "Colega",
    message: "Tuve el honor de trabajar junto a Elena por 20 años. Su dedicación a sus alumnos era extraordinaria. Muchas generaciones le deben su amor por el aprendizaje."
  }
]

export function Tributes() {
  return (
    <section id="tributos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Palabras de Amor
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mensajes de quienes tuvieron la fortuna de conocerla
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tributes.map((tribute, index) => (
            <motion.div
              key={tribute.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                {`"${tribute.message}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{tribute.name}</p>
                  <p className="text-sm text-muted-foreground">{tribute.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
